import express from 'express';
import { registerUser, getUsers } from '../app/controllers/authController.js';

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for listing all registered users
router.get('/users', getUsers);

export default router;
