const mongoose = require( "mongoose");
const staffSchema = mongoose.Schema(
  {
    registered_by: {
      type: String,
      required: true,
      ref: "Admin",
    },
    staff_name: {
      type: String,
      required: true,
    },
    staffId: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contact_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    previous_school: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    estimated_salary: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Staff = mongoose.model("Staff", staffSchema);
module.exports= Staff;
