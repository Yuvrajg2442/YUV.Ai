import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "YUVAi", // Unique app ID
  name: "YUVAi",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
