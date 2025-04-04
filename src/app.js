import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
/* import { logRequestsAndErrors, logger } from './config/logger.js'; */

// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
/* logRequestsAndErrors(app); */ // Log requests and errors

// Import routes
import authRoutes from './routes/authroutes.js';
import userRoutes from './routes/userroutes.js';
import courseRoutes from './routes/courseroutes.js';
import examRoutes from './routes/examroutes.js';
import paymentRoutes from './routes/paymentroutes.js';

// Use the routes
app.use('/tum/auth', authRoutes);
app.use('/tum/users', userRoutes);
app.use('/tum/courses', courseRoutes);
app.use('/tum/exams', examRoutes);
app.use('/tum/payments', paymentRoutes);

// Global error handler
/* app.use((err, req, res, next) => {
    logger.error(`Global Error: ${err.message}`);
    res.status(500).send('Something went wrong!');
}); */




export default app;
