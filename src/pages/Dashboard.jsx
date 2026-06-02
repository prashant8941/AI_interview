function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="card">
        <h2>Welcome to AI Interview Platform</h2>
        <p>Upload your resume and start AI-powered interview preparation.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Resume Upload</h3>
          <p>Upload PDF resume and extract skills.</p>
        </div>

        <div className="card">
          <h3>AI Questions</h3>
          <p>Generate interview questions using Gemini AI.</p>
        </div>

        <div className="card">
          <h3>AI Evaluation</h3>
          <p>Get score and feedback on your answers.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;