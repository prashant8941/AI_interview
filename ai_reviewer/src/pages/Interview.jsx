import { useState } from "react";
import API from "../api";

function Interview() {
  const [skills, setSkills] = useState("");
  const [questions, setQuestions] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateQuestions = async () => {
    try {
      const res = await API.post("/interview/questions", { skills });
      setQuestions(res.data.questions);
    } catch (error) {
  console.log(error.response?.data || error.message);
  alert(error.response?.data?.message || "Question generation failed");
}
  };

  const evaluateAnswer = async () => {
    try {
      const res = await API.post("/interview/evaluate", {
        question,
        answer
      });

      setFeedback(res.data.feedback);
    } catch {
      alert("Evaluation failed");
    }
  };

  return (
    <div className="container">
      <h1>AI Interview</h1>

      <div className="card">
        <h3>Enter Skills</h3>

        <input
          type="text"
          placeholder="Java, React, SQL, DSA"
          onChange={(e) => setSkills(e.target.value)}
        />

        <button onClick={generateQuestions}>Generate Questions</button>
      </div>

      {questions && (
        <div className="card">
          <h3>Generated Questions</h3>
          <pre>{questions}</pre>
        </div>
      )}

      <div className="card">
        <h3>Answer Evaluation</h3>

        <textarea
          placeholder="Paste question here"
          rows="3"
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>

        <textarea
          placeholder="Write your answer here"
          rows="5"
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <button onClick={evaluateAnswer}>Evaluate Answer</button>
      </div>

      {feedback && (
        <div className="card">
          <h3>AI Feedback</h3>
          <pre>{feedback}</pre>
        </div>
      )}
    </div>
  );
}

export default Interview;