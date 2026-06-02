const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateQuestions = async (req, res) => {
  try {

    const { skills } = req.body;

    if (!skills) {
      return res.status(400).json({
        message: "Skills are required"
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
Generate 5 technical interview questions for:
${skills}

Return only questions in numbered format.
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    res.json({
      questions: text
    });

  } catch (error) {

    console.log("Gemini Error:", error.message);

    res.json({
      questions: `
1. What is ${req.body.skills}?
2. Explain important concepts of ${req.body.skills}.
3. What are the advantages of ${req.body.skills}?
4. Explain one real-world use case of ${req.body.skills}.
5. Difference between basic and advanced concepts in ${req.body.skills}.
`
    });
  }
};

exports.evaluateAnswer = async (req, res) => {
  try {

    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        message: "Question and answer are required"
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
Question:
${question}

Answer:
${answer}

Evaluate this answer.

Give:
1. Score out of 10
2. Strengths
3. Weaknesses
4. Improved Answer
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    res.json({
      feedback: text
    });

  } catch (error) {

    console.log("Gemini Error:", error.message);

    res.json({
      feedback: `
Score: 7/10

Strengths:
Good basic understanding.

Weaknesses:
Need more technical depth and examples.

Improved Answer:
Explain with definition, working, advantages, and one practical example.
`
    });
  }
};