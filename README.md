# Next.js Paywall Application with Mock Payment System

Implements a content paywall with protected routes accessible after simulated payments.

## Features

- **Mock Payment System**: Simulated payment flow without real transactions
- **Protected Routes**: Subscription-based access control
- **SQLite Database**: Persistent data storage with Prisma ORM
- **Authentication**: User management with NextAuth.js
- **Subscription Management**: Bronze, Silver, and Gold tiers

## Requirements Implemented

✅ **Mock Payment System**  
✅ **SQLite Database with Prisma ORM**  
✅ **Next.js App Router (v14+)**  
✅ **Protected Routes**  
✅ **JavaScript Implementation**

## 🔄 Routes & Endpoints

### Public Pages

| Path        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `/`         | Home page with **Login** & **Register**                          |
| `/login`    | Email & password form to **sign in**                             |
| `/register` | Form for first name, last name, email & password to **register** |

### Authenticated (User must be logged in)

| Path         | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| `/dashboard` | Shows user’s first & last name and subscription status.                                      |
| `/payment`   | Fill the form and choose one out of 3 possible subscriptions to view different premium pages |

### Premium (User must be logged in **and** `has_subscription = true`)

| Path                            | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| `/premium/document-templates`   | List of visa document templates for copy/paste                         |
| `/premium/consultation-booking` | List of people to contact and book a one-on-one appointment with them. |
| `/premium/embassy-hub`          | Details about several embassies & appointment booking tips             |

## Getting Started

### 1. Prerequisites

- Node.js v18+
- npm v9+

### 2. Installation

```bash
git clone <repo>
cd nextjs-paywall
npm install
```

### 3. Configure Environment

Create `.env.local` file:

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="your_secure_secret"  # Generate with: openssl rand -base64 32
# Optional GitHub auth:
AUTH_GITHUB_ID="your_github_id"
AUTH_GITHUB_SECRET="your_github_secret"
AUTH_TRUST_HOST=true
```

### 4. Initialize Database

```bash
npm run db:migrate
```

### 5. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## Key Implementation Details

### Payment Simulation

- Simple form-based "payment" confirmation
- No external payment processors
- Records transactions in database
- Grants subscription access immediately

## Development Commands

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `npm run dev`        | Start development server          |
| `npm run build`      | Create production build           |
| `npm start`          | Start production server           |
| `npm run db:migrate` | Run database migrations           |
| `npm run db:reset`   | Reset database schema             |
| `npm run db:studio`  | Launch Prisma Studio (DB manager) |
