import mongoose from "mongoose";

const contactShema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  message: { type: String },
});

const Contact = mongoose.model("Contact", contactShema);

export default Contact;
