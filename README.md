AI Interview Platform

An AI-powered full stack interview preparation platform that helps users upload resumes, extract skills, generate AI-based interview questions, and evaluate answers intelligently.

🚀 Features
🔐 User Authentication (JWT)
📄 Resume Upload (PDF)
🧠 AI Resume Skill Extraction
🤖 AI-generated Interview Questions
🎤 Interview Answer Evaluation
📊 Interview Score Dashboard
👤 User Profile & History
☁️ MongoDB Atlas Integration
⚡ REST API Based Backend

🛠️ Tech Stack
Frontend
React.js
Vite
CSS
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
AI Integration
Gemini API
Authentication
JWT (JSON Web Token)


📂 Project Structure
AI_interview/
│
├── ai_reviewer/          # Frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/              # Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
└── README.md


⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/prashant8941/AI_interview.git
2️⃣ Install Frontend Dependencies
cd ai_reviewer
npm install
3️⃣ Install Backend Dependencies
cd ../backend
npm install


🔑 Environment Variables
Create a .env file inside backend/

PORT=5000

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

MONGO_URI=your_mongodb_connection_string


▶️ Run Project
Start Backend
cd backend
npm run dev 
Start Frontend
cd ai_reviewer
npm run dev


🌐 Local URLs
Frontend:
http://localhost:5173

Backend:
http://localhost:5000

📸 Core Functionalities
Resume Upload
Users can upload resumes in PDF format.

Skill Extraction
AI extracts important skills and technologies from uploaded resumes.

AI Interview Questions
Gemini AI generates technical interview questions based on extracted skills.

AI Evaluation
The platform evaluates answers and provides intelligent feedback and scores.

Dashboard
Users can track interview history and performance.

🔒 Security Features
JWT Authentication
Protected Routes
Environment Variables Protection
Secure MongoDB Atlas Connection
🚀 Future Improvements
Video Interview Support
Voice-based AI Interviews
Resume ATS Score
Company-wise Interview Questions
Leaderboard System
👨‍💻 Author

Prashant Sharma

GitHub: prashant8941
