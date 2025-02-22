import  { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDA5b3TG8G8fQJWa9j77KunOOfXO65PT-k");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export default model