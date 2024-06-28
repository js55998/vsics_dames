const mongoose = require( "mongoose");
const staffAttendanceSchema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  attendance_date: {
    type: Date,
    default: Date.now(),
  },

  staffs: [
    {
      staff_name: {
        type: String,
        required: true,
      },

      staffId: {
        type: Number,
        required: true,
      },
      present: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ],
});

const StaffAttendance = mongoose.model(
  "StaffAttendance",
  staffAttendanceSchema
);
module.exports= nonTeachingStaffAttendance;
