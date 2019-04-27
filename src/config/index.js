import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  logs: {
    label: process.env.LOG_LABEL,
    level: process.env.LOG_LEVEL,
    filename: process.env.LOG_FILE,
  },
};
