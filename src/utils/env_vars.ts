import dotenv from "dotenv";

dotenv.config();

export const environment = {
  API: {
    BASE_URL: process.env.API_BASE_URL,
  },
};
