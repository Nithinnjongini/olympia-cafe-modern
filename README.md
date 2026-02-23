# Olympia Cafe & Gyros - Modernized Web App

A modernized, high-performance version of the Olympia Cafe & Gyros website built with **Next.js**, **React**, and **Tailwind CSS**.

## ✨ Features

- **Mobile-First Design:** Fully responsive layout optimized for all devices.
- **Modern Greek Aesthetic:** Vibrant Mediterranean color palette and clean typography.
- **Dynamic Menu:** Categorized food menu with detailed descriptions and pricing.
- **Optimized Performance:** Fast load times and smooth animations using Framer Motion.
- **Deployment Ready:** Easily deployable to Vercel, Netlify, or any cloud provider.

## 📖 Documentation

- **[Project Walkthrough](DOCS/WALKTHROUGH.md):** Comprehensive overview of the modernization and verification.
- **[User Journey](DOCS/USER_JOURNEY.md):** Detailed walkthrough of the customer experience.
- **[GCP Deployment Guide](DOCS/GCP_DEPLOYMENT.md):** Step-by-step instructions for Google Cloud Platform.
- **[Local Development](#local-development):** How to run the project on your machine.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (standard with Node.js)

### Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
# Generate optimized production build
npm run build

# Start the production server
npm run start
```

## 🛠 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## ☁️ Deployment

### Google Cloud (Cloud Run)
See the [GCP Deployment Guide](DOCS/GCP_DEPLOYMENT.md) for full instructions on containerizing and deploying via Cloud Run.

### Vercel
Connect your repo to Vercel for automatic CI/CD.

## 🧪 Testing

- **Linting:** `npm run lint`
- **Build Test:** `npm run build`
- **Responsive Audit:** Use Browser DevTools (F12) to verify mobile responsiveness.

## 📝 License
This project is built for demonstration purposes. All branding and menu content belongs to **Olympia Cafe & Gyros**.
