import { useState } from "react";
import API from "../api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await API.post("/resume/upload", formData);
      setResumeText(res.data.resumeText);
      alert("Resume uploaded");
    } catch {
      alert("Upload failed");
    }
  };

  return (
    <div className="container">
      <h1>Upload Resume</h1>

      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button>Upload</button>
      </form>

      {resumeText && (
        <div className="card">
          <h3>Extracted Resume Text</h3>
          <textarea value={resumeText} readOnly rows="10"></textarea>
        </div>
      )}
    </div>
  );
}

export default UploadResume;