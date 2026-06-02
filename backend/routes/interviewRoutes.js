const express = require("express");

const auth = require("../middleware/authMiddleware");

const {
  generateQuestions,
  evaluateAnswer
} = require("../controllers/interviewController");

const router = express.Router();

router.post(
  "/questions",
  auth,
  generateQuestions
);

router.post(
  "/evaluate",
  auth,
  evaluateAnswer
);

module.exports = router;