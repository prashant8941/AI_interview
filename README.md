# 🚀 AI Interview Platform

An AI-powered interview preparation platform that helps users upload resumes, extract skills, generate personalized interview questions, evaluate answers, and track interview performance.

---

## 🌐 Live Demo

**Frontend:** https://ai-interview-al9p.vercel.app

**Backend:** https://ai-interview-ywi3.onrender.com

---

## 📌 Overview

AI Interview Platform is a full-stack web application designed to simulate real interview experiences. Users can upload their resumes, automatically extract skills, generate AI-based interview questions, answer them, and receive AI-generated evaluations and scores.

The project demonstrates authentication, file handling, REST API development, database integration, and AI integration using modern web technologies.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### 📄 Resume Management

* Upload Resume (PDF)
* Extract Resume Text
* Store Resume Data in Database

### 🤖 AI Interview System

* AI-Generated Interview Questions
* Skill-Based Question Generation
* Personalized Interview Experience

### 📊 Evaluation Dashboard

* AI-Based Answer Evaluation
* Interview Score Generation
* Performance Tracking

### 👤 User Profile

* User Information Storage
* Interview History Tracking
* Resume History Management

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer
* PDF Parser

### Database

* MongoDB Atlas
* Mongoose

### AI Integration

* Google Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
AI_Interview_Platform/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── index.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ResumeUpload.jsx
│   │   │   └── Interview.jsx
│   │   │
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   └── interviewController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Resume.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── resumeRoutes.js
│   │   └── interviewRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/prashant8941/AI_interview.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Resume

```http
POST /api/resume/upload
```

### Interview

```http
POST /api/interview/generate
POST /api/interview/evaluate
```

---

## 📸 Screenshots

Add screenshots here:

### Login Page

<img width="800" alt="Login" src="screenshots/login.png">

### Resume Upload

<img width="800" alt="Resume Upload" src="screenshots/resume.png">

### AI Interview

<img width="800" alt="Interview" src="screenshots/interview.png">

### Dashboard

<img width="800" alt="Dashboard" src="screenshots/dashboard.png">

---

## 🎯 Skills Demonstrated

* Full Stack Development
* REST API Development
* Authentication & Authorization
* File Upload Handling
* MongoDB Database Design
* AI Integration
* PDF Processing
* Deployment & Hosting
* Error Handling
* API Security

---

## 🔮 Future Enhancements

* ATS Resume Score
* AI Voice Interview
* AI Video Interview
* Company-Specific Interview Sets
* Interview Analytics Dashboard
* Interview Report Download (PDF)
* Leaderboard System
* Interview Performance Trends

---

## 📚 Learning Outcomes

This project helped me gain hands-on experience with:

* MERN Stack Development
* JWT Authentication
* MongoDB Atlas
* Gemini API Integration
* Resume Parsing
* File Upload Management
* Cloud Deployment (Vercel + Render)
* Secure API Development

---

## 👨‍💻 Author

**Prashant Sharma**

GitHub: https://github.com/prashant8941

LinkedIn: Add Your LinkedIn Profile Here

---

⭐ If you found this project useful, consider giving it a star.
<img width="1916" height="875" alt="Screenshot 2026-06-06 012114" src="https://github.com/user-attachments/assets/0af42489-41bc-4489-a526-fb082113d72f" />
<img width="1914" height="877" alt="Screenshot 2026-06-06 012039" src="https://github.com/user-attachments/assets/f20d0418-e427-4ceb-8f44-b0fd2ae2fa8f" />
<img width="1919" height="880" alt="Screenshot 2026-06-06 012024" src="https://github.com/user-attachments/assets/d06195d1-6918-4271-b6ba-ef7d52cec6ef" />
<img width="1919" height="880" alt="Screenshot 2026-06-06 011920" src="https://github.com/user-attachments/assets/2ed04744-a722-4361-8ac4-d02f704754bb" />
