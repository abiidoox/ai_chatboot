import axios from "axios";

const API_URL = "http://localhost:8000/chat";

export const sendMessage = async (message) => {
  const response = await axios.post(API_URL, { question: message });
  return response.data.answer;
};
