import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/User.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// connect to MongoDB
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/registration_db';
await mongoose.connect(mongoUri);
console.log("Connected to MongoDB");


app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, contactNumber, email } = req.body;

    if (!firstName || !lastName || !contactNumber || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const user = new User({ firstName, lastName, contactNumber, email });
    const saved = await user.save();

    res.json({ message: "Registered successfully", id: saved._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});


app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).limit(5).lean();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
