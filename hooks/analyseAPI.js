// Access your API key as an environment variable (see "Set up your API key" above)
const { GoogleGenerativeAI } = require('@google/generative-ai');
// import dotenv
const prompt =require('./prompt')
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY
const genAI = new GoogleGenerativeAI(
    API_KEY
);

 const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const askGemini = async (prompt) => {
    try {
        
        // Assume `model` is already initialized with Google Generative AI

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        text = text.replace(/\*\*|\*|\d+\./g, ''); // Remove markdown and numbered list markers

        // Convert Markdown to HTML

        return text
    } catch (error) {
        return ('Some Error happened')
    }
};

module .exports = askGemini