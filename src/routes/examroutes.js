import express from 'express';
import { createExam, getAllExams, getExamById, updateExam, deleteExam } from '../controllers/examcontroller.js';

const router = express.Router();

// Create a new exam
router.post('/', createExam);

// Get all exams
router.get('/', getAllExams);

// Get exam by ID
router.get('/:id', getExamById);

// Update exam
router.put('/:id', updateExam);

// Delete exam
router.delete('/:id', deleteExam);

export default router;