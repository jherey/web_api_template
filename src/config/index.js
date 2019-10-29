import dotenv from 'dotenv';

dotenv.config();

// required environment variables
[
  'NODE_ENV', 'PORT', 'API_PREFIX', 'AGENDA_COLLECTION',
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    test: process.env.TEST_DATABASE_URL,
    dev: process.env.DATABASE_URL,
  },
  logs: {
    label: process.env.LOG_LABEL,
    level: process.env.LOG_LEVEL,
    filename: process.env.LOG_FILE,
  },
  api: {
    prefix: process.env.API_PREFIX,
  },
  agenda: {
    dbCollection: process.env.AGENDA_COLLECTION,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    ...(process.env.REDIS_PASSWORD && process.env.REDIS_PASSWORD !== '') && { password: process.env.REDIS_PASSWORD },
  },
  jobConfig: {
    retryLimit: 5,
    retryDelay: 1000, // milliseconds
  },
};
