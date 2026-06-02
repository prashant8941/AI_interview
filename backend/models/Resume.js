const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  resume_text: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Resume", resumeSchema);