# 🚀 AI Career Coach

A comprehensive **Full-Stack Next.js 15** application designed to help professionals accelerate their career development through AI-powered tools — from resume building and cover letter generation to interview preparation and real-time industry insights.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2?logo=google)

---

## 📖 Overview

AI Career Coach combines a modern, responsive frontend with serverless automation and generative AI to deliver a smart, hands-off career companion. Users get personalized industry insights, an AI-assisted resume and cover letter builder, and an interactive interview prep system — all wrapped in a clean, professional UI.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS |
| **Component Library** | Shadcn UI |
| **Authentication** | Clerk (custom-styled sign-in/sign-up flows) |
| **Database** | NeonDB (Serverless PostgreSQL) |
| **ORM** | Prisma |
| **AI Engine** | Google Gemini API |
| **Background Jobs** | Inngest (serverless cron & event-driven functions) |

---

## ✨ Key Features

### 📊 Industry Insights Dashboard
An analytics-driven dashboard displaying real-time job market trends, salary data, and recommended skills tailored to the user's industry. Data refreshes automatically every week via scheduled background jobs.

### 📄 AI-Powered Resume Builder
- Build ATS-friendly resumes with a clean editor
- **"Improve with AI"** button leverages Gemini to rewrite bullet points for maximum impact
- Live Markdown previewer for real-time formatting feedback
- One-click export to PDF

### 🎯 Interview Preparation System
- AI-generated, role-specific interview questions
- Interactive mock quiz interface
- Performance tracking dashboard with line charts to visualize progress over time

### ✉️ Cover Letter Generator
Generates customized, professional cover letters using the user's profile data combined with a target job description.

### ⚙️ Background Automation
Powered by **Inngest**, the app runs scheduled serverless cron jobs (e.g., weekly industry data refreshes) without any manual intervention, keeping insights current automatically.

---

## 🏗️ Architecture Highlights

```
┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐
│   Next.js 15     │◄────►│    Clerk      │      │   Google Gemini  │
│  (React 19 UI)   │      │ (Auth Layer)  │      │   (AI Engine)    │
└────────┬─────────┘      └──────────────┘      └────────┬─────────┘
         │                                                 │
         ▼                                                 ▼
┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐
│   Prisma ORM     │◄────►│   NeonDB      │      │    Inngest        │
│                   │      │ (PostgreSQL)  │      │ (Cron / Events)   │
└─────────────────┘      └──────────────┘      └─────────────────┘
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- A NeonDB (PostgreSQL) database
- Clerk account & API keys
- Google Gemini API key
- Inngest account (or local dev server)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ai-career-coach.git
cd ai-career-coach

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```env
DATABASE_URL=your_neondb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev
```

### Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure (Suggested)

```
ai-career-coach/
├── app/                  # Next.js App Router pages & layouts
│   ├── (auth)/           # Clerk sign-in / sign-up routes
│   ├── dashboard/        # Industry insights dashboard
│   ├── resume/           # AI resume builder
│   ├── interview/        # Interview prep & mock quizzes
│   └── cover-letter/     # Cover letter generator
├── components/           # Shadcn UI + custom components
├── lib/                  # Utility functions, Prisma client, Gemini client
├── inngest/               # Background jobs & cron functions
├── prisma/                # Prisma schema & migrations
└── public/                 # Static assets
```

---

## 🗺️ Roadmap Ideas

- [ ] LinkedIn profile import
- [ ] Multi-language resume support
- [ ] AI-driven salary negotiation coach
- [ ] Team/enterprise dashboards

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [NeonDB](https://neon.tech/)
- [Prisma](https://www.prisma.io/)
- [Google Gemini](https://ai.google.dev/)
- [Inngest](https://www.inngest.com/)
