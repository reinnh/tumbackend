/* import winston from 'winston';
import express from 'express';
import morgan from 'morgan';

// Logger setup using Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' })
    ],
});

// HTTP request logger using Morgan
const morganLogger = morgan('combined');

// Function to log requests and errors
const logRequestsAndErrors = (app) => {
    app.use(morganLogger);
    app.use((req, res, next) => {
        logger.info(`Request to ${req.method} ${req.url}`);
        next();
    });
};

// Function to log errors globally
const logError = (err, req, res, next) => {
    logger.error(`Error: ${err.message}, Stack: ${err.stack}`);
    res.status(500).send('Something went wrong!');
};

export { logger, logRequestsAndErrors, logError };
 */