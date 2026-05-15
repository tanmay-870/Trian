# Trian

Trian is a scalable AI-powered chatbot platform being built using modern MERN stack technologies and Generative AI concepts.

The goal of this project is to create a production-style chatbot system with modular architecture, clean code practices, and future scalability for advanced AI features.

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## AI Integration
- OpenAI API

---

# Project Structure

```bash
Trian/
│
├── client/                 # Frontend application
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Application pages
│       ├── hooks/          # Custom React hooks
│       ├── services/       # API and external services
│       ├── context/        # Global state management
│       ├── utils/          # Helper functions
│       └── assets/         # Static assets
│
├── server/                 # Backend application
│   └── src/
│       ├── controllers/    # Business logic
│       ├── routes/         # API routes
│       ├── models/         # Database schemas
│       ├── middlewares/    # Custom middleware
│       ├── services/       # AI & external services
│       ├── config/         # Configuration files
│       └── utils/          # Helper utilities
│
├── docs/                   # Project documentation
│
├── .gitignore
└── README.md