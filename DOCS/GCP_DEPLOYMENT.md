# Google Cloud Platform (GCP) Deployment Guide

This guide provides steps to deploy the Olympia Cafe modernized web app to Google Cloud Platform using **Cloud Run**.

## Prerequisites
- A Google Cloud Platform account.
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed locally.
- A project created in the GCP Console.

## Step 1: Prepare the Application
Ensure your `next.config.ts` (or `.js`) is set to output a standalone build.

```typescript
// next.config.ts
const nextConfig = {
  output: 'standalone',
};
export default nextConfig;
```

## Step 2: Create a Dockerfile
Create a `Dockerfile` in the root of your project:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

## Step 3: Build and Push Image to Artifact Registry
1.  **Enable APIs:**
    ```bash
    gcloud services enable artifactregistry.googleapis.com run.googleapis.com
    ```
2.  **Create Repository:**
    ```bash
    gcloud artifacts repositories create olympia-repo --repository-format=docker --location=us-central1
    ```
3.  **Submit Build:**
    ```bash
    gcloud builds submit --tag us-central1-docker.pkg.dev/[PROJECT_ID]/olympia-repo/web-app .
    ```

## Step 4: Deploy to Cloud Run
```bash
gcloud run deploy olympia-cafe \
  --image us-central1-docker.pkg.dev/[PROJECT_ID]/olympia-repo/web-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## alternative: App Engine
If you prefer App Engine, create an `app.yaml`:
```yaml
runtime: nodejs18
instance_class: F1
env_variables:
  NODE_ENV: "production"
```
Then run:
```bash
gcloud app deploy
```
