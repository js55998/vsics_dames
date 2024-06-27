import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//Table Design
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

adminSchema.method.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


//Table Creation(NAME,SCHEMA)
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
