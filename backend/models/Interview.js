const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  question: String,
  answer: String,
  feedback: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Interview", interviewSchema);