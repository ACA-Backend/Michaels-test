

import { v4 as uuidv4 } from 'uuid';
import { users } from '../models/user.js';
import { validateUserRegistration } from '../../Lib/utils/validation.js';



// Function to register a new user
export const registerUser = (req, res) => {
  // Validate user input
  const { error } = validateUserRegistration(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // to Check if username is already taken
  const existingUser = users.find(user => user.username === req.body.username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username is already taken' });
  }

  // Check if email is already registered
  const existingEmail = users.find(user => user.email === req.body.email);
  if (existingEmail) {
    return res.status(400).json({ error: 'Email is already registered' });
  }

  // Create new user object
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email
  };

  // Add new user to array
  users.push(newUser);

  // Respond with success message
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Function to get all registered users
export const getUsers = (req, res) => {
  res.json(users);
};
