/* eslint-disable no-shadow */
import winston from 'winston';
import config from '../config';

const CONSOLE_DATE_FORMAT = 'HH:mm:ss.SSS';

const createLogger = () => {
  const { label } = config.logs;
  const { level } = config.logs;
  const { filename } = config.logs;

  const logger = winston.createLogger({ level });
  const hasLogFile = typeof filename === 'string' && filename.length > 0;

  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.label({ label }),
      winston.format.timestamp({ format: CONSOLE_DATE_FORMAT }),
      winston.format.splat(),
      winston.format.printf(({
        level, message, label, timestamp,
      }) => `${timestamp} [${label}] ${level}: ${message}`),
    ),
  }));

  if (hasLogFile) {
    logger.add(new winston.transports.File({
      filename,
      format: winston.format.combine(
        winston.format.label({ label }),
        winston.format.timestamp(),
        winston.format.splat(),
        winston.format.uncolorize(),
        winston.format.json(),
      ),
    }));
  }

  return logger;
};

const logger = createLogger();

export default logger;
