import dotenv from "dotenv";

dotenv.config();

const config = {
  apiKey: process.env.BOT_API_KEY,
  admintChatId: process.env.ADMIN_ID,
};

export { config };
