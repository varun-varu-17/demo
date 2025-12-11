import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String,
             required: true },
  lastName: { type: String,
             required: true },
  contactNumber: { type: String,
                 required: true },
  email: { type: String,
         required: true,
          lowercase: true,
        trim: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
