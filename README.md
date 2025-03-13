# Store Starter

## 📌 Project Description

Store Starter is a modern e-commerce application built with Next.js. It utilizes Prisma as the ORM, Clerk for authentication, Stripe for payment processing, and Supabase as the backend database. Styling is based on Tailwind CSS, with interactive components provided by Radix UI.

## 🚀 Technologies

This project leverages the following technologies:

- **Next.js** (v14.2.3) - A React framework for server-side rendering (SSR) and static site generation (SSG).
- **React** (v18) - A library for building user interfaces.
- **Prisma** (v5.15.0) - ORM for database management.
- **Clerk** (v5.1.4) - User authentication management.
- **Stripe** (v16.0.0) - Online payment processing.
- **Supabase** (v2.43.4) - A cloud-based backend with PostgreSQL database.
- **Radix UI** - A set of interactive UI components.
- **Tailwind CSS** (v3.4.1) - A utility-first CSS framework.
- **ESLint** - A linter for code analysis.
- **TypeScript** (v5) - Static typing for JavaScript.

## ⚡ Installation and Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/user/store-starter.git
cd store-starter
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Environment Configuration

Create a `.env` file and fill in the required environment variables:

```ini
DATABASE_URL=postgresql://user:password@host:port/database
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4️⃣ Run the project in development mode

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🛠️ Building and Deployment

### Generate and build the project

```sh
npm run build
```

### Run the application in production mode

```sh
npm start
```
