import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import stockRoutes from './routes/stocks.js';
import ipoRoutes from './routes/ipos.js';
import blogRoutes from './routes/blogs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/stocks', stockRoutes);
app.use('/api/ipos', ipoRoutes);
app.use('/api/blogs', blogRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: 'Bluestock API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});