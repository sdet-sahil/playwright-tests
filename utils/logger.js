
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  base: null,
  formatters: {
    level: () => ({})
  },
  redact: {
    paths: [
      'password',
      'email',
      'req.headers.authorization',
      'token'
    ],
    censor: '[REDACTED]'
  }
});