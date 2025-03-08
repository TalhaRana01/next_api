import mongoose from "mongoose";

// Define the schema
const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists to prevent recompilation errors
// This is critical for Next.js hot reloading
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
