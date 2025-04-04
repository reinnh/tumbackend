import express from 'express';
import { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment } from '../controllers/paymentcontroller.js';

const router = express.Router();

// Create a new payment
router.post('/', createPayment);

// Get all payments
router.get('/', getAllPayments);

// Get payment by ID
router.get('/:id', getPaymentById);

// Update payment
router.put('/:id', updatePayment);

// Delete payment
router.delete('/:id', deletePayment);

export default router;