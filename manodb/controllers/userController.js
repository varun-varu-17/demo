import User from "../models/User.js";

export const registerUser = async (req, res) => {
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
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).limit(5);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
