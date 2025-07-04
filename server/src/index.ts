import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send(`Chef's Choice API is live!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log ('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));