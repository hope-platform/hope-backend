# Hope - Autism Family Support Platform 🌿

A calm, multilingual platform that supports parents of autistic children globally.
Hope gives parents immediate step-by-step guidance during crisis moments,
practical resources in their language, and access to affordable verified specialists.

Built for underserved communities first, families who have no platform built for them.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript (strict mode)
- **Database:** PostgreSQL via Supabase
- **ORM:** Prisma 7
- **Validation:** Zod
- **Email:** Resend
- **Deployment:** Render (Docker)

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- A Supabase project

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/hope-platform/hope-backend.git
   cd hope-backend
```

2. Install dependencies:

```bash
   pnpm install
```

3. Copy the environment file and fill in your values:

```bash
   cp .env.example .env
```

4. Run database migrations:

```bash
   pnpm exec prisma migrate dev
```

5. Seed the database:

```bash
   pnpm exec prisma db seed
```

6. Start the development server:

```bash
   pnpm dev
```

7. Visit http://localhost:5000/health

---

## API Endpoints

### Public

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | /health           | Health check              |
| GET    | /situations       | All situations with steps |
| GET    | /situations/:type | Single situation by type  |
| GET    | /specialists      | All verified specialists  |
| GET    | /specialists/:id  | Single specialist         |

### Protected

> Send `X-Hope-User-Id: <uuid>` header on every request.

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| POST   | /users          | Create user after onboarding |
| GET    | /users/:id      | Get user by id               |
| POST   | /bookings       | Submit a booking request     |
| GET    | /bookings/admin | View all bookings            |

### Query Parameters

- `?lang=en` — Filter by language (en, fr, dr)
- `?language=fr` — Filter specialists by language
- `?location=Paris, FR` — Filter specialists by location

---

## Project Structure

src/  
controllers/ Request and response handling  
services/ Database and business logic  
routes/ API route definitions  
middleware/ Auth, validation, logging, errors  
schemas/ Zod validation schemas

prisma/  
schema.prisma Database schema  
migrations/ Migration history  
seed.ts Seed data

---

## Environment Variables

See `.env.example` for all required variables.

---

## Built By

**Muzhgan** — Backend · [GitHub](https://github.com/Muzhgan-shams)

**Noorsaba** — Frontend · [GitHub](https://github.com/Noorsaba786)

---

_Hope is a social enterprise. We only earn when we successfully connect a parent to help._
