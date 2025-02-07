# GIGHUB - Job Portal

## 🚀 Introduction
**GIGHUB** is a full-stack job portal that connects job seekers with employers. It provides candidates the ability to search and apply for jobs, while allowing employers to post job listings and manage applications. The platform also includes an admin panel for managing users and job postings.

## 🔥 Features
### ✅ Candidate Features:
- User authentication (signup/login/logout)
- Profile management (resume, skills, experience)
- Job search and filtering
- Apply for jobs
- Save jobs for later

### ✅ Employer Features:
- Employer registration and authentication
- Post and manage job listings
- View and manage candidate applications
- Contact potential candidates

### ✅ Admin Features:
- Manage users and jobs
- Moderate job postings
- Handle user reports and disputes

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite, Tailwind CSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Hosting:** Frontend (Vercel/Netlify), Backend (Render/Heroku)

## 🎯 API Endpoints
### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user

### Jobs
- `GET /api/jobs` – Fetch all job listings
- `POST /api/jobs` – Create a job (Employer only)
- `GET /api/jobs/:id` – Fetch a single job by ID

### Applications
- `POST /api/applications` – Apply for a job (Candidate)
- `GET /api/applications/:jobId` – Get applications for a job (Employer only)

## ⚡ Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/rohitkatkarr/gighub.git
   cd gighub
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables** (Create a `.env` file and add the following)
   ```env
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key
   ```
4. **Run the project**
   ```sh
   npm start
   ```

## 🚀 Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Heroku

## 📌 Future Enhancements
- AI-powered job recommendations
- Resume parsing and optimization
- Employer analytics dashboard
- 
---
Made with ❤️ by the GIGHUB Team 🚀
