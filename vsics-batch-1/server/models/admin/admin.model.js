const mongoose = require( "mongoose");
const bcrypt = require( "bcryptjs");

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
  {
    timestamps: true,
  }
);

adminSchema.methods.matchPassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//Table name is Admin.
//Table Design is adminSchema
const Admin = mongoose.model("Admin", adminSchema);
module.exports= Admin;
