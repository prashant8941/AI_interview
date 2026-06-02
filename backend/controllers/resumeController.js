const fs = require("fs");
const pdfParse = require("pdf-parse");
const Resume = require("../models/Resume");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    const resumeText = pdfData.text;

    await Resume.create({
      user_id: req.user.id,
      resume_text: resumeText
    });

    res.json({
      message: "Resume uploaded successfully",
      resumeText
    });
  } catch (error) {
    console.log("Resume Upload Error:", error.message);

    res.status(500).json({
      message: "Resume upload failed"
    });
  }
};