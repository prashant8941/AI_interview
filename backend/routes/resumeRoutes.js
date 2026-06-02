const express = require("express");
const multer = require("multer");
const auth = require("../middleware/authMiddleware");
const { uploadResume } = require("../controllers/resumeController");

const router = express.Router();

const upload = multer({
  dest: "uploads/"
});

router.post("/upload", auth, upload.single("resume"), uploadResume);

module.exports = router;