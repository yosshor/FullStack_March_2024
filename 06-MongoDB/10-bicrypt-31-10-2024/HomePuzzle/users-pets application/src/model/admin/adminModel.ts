import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: true },
});

const Admin = mongoose.model("Admin", AdminSchema); 
export default Admin;