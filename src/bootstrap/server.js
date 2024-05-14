import express from 'express';
import { errorHandler } from '../app/middleware/errorHandler.js';



const PORT = process.env.PORT || 3000;
const app = express();
// Middleware
app.use(express.json());

// Error handling middleware
app.use(errorHandler);

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  

export { app };
