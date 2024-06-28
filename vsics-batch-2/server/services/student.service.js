const Student =require("../models/student/student.model");
const StudentFees=require("../models/student/studentFees.model");
const StudentAttendance=require("../models/student/studentAttendance.model");

const studentService={};

studentService.createStudent = async (studentpayload) => {
  const newStudent = await Student.create(studentpayload);
  return newStudent;
};
studentService.updateStudentById = async (studentid, updatedpayload) => {
  const updateStudent = await Student.findByIdAndUpdate(
    studentid,
    updatedpayload,
    { new: true }
  );
  return updateStudent;
};
studentService.deleteStudentById = async (studentid) => {
  const deleteStudent = await Student.findByIdAndDelete(studentid);
  return deleteStudent;
};
studentService.getAllStudent = async () => {
  const students = await Student.find({});
  return students;
};
studentService.getStudentById = async (studentid) => {
  const student = await Student.findById(studentid);
  return student;
};

studentService.getAllStudentByClass = async (className) => {
  const students = await Student.find({ classname: className });
  return students;
};

studentService.getOneStudentByClass = async (className) => {
  const student = await Student.findOne({ classname: className })
    .sort({ roll_no: -1 })
    .limit(1);
  return student;
};
studentService.getByClassAttendance = async(requestParameter) => {
  const student = await StudentAttendance.findOne({
    attendance_date: requestParameter.attendance_date,
    classname: requestParameter.classname,
  })
  return student;
};

studentService.searchStudentByNameClassRoll = async (searchQuery) => {
  const student = await Student.find({
    student_name: searchQuery.name,
    classname: searchQuery.className,
    roll_no: parseInt(searchQuery.rollNo),
  });
  return student;
};

studentService.createAttendance = async (attendanceData) => {
  const newAttendance = await StudentAttendance.create({
    class_teacher: attendanceData.teacher,
    attendance_date: Date.now(),
    classname: attendanceData.className,
    students: attendanceData.Students,
  });
  return newAttendance;
};

studentService.updateAttendance = async (re_attendanceData) => {
  const updatedAttendance = await StudentAttendance.updateOne({
    _id: re_attendanceData._id,
    $set: { students: re_attendanceData.students },
  });
  return updatedAttendance;
};

studentService.getOneAttendance = async (searchQuery) => {
  const Attendance = await StudentAttendance.findOne({
    attendance_date: searchQuery.attendanceDate,
    classname: searchQuery.className,
  });
  return Attendance;
};

studentService.payFees = async (fees_details) => {
  const feesSubmit = await StudentFees.create(fees_details);
  return feesSubmit;
};
studentService.totalFees = async () => {
  const fees_info = await StudentFees.find()
    .select(
      "monthly_fees hostel_fees laboratory_fees computer_fees exam_fees miscellaneous "
    )
    .select("-_id");
};

module.exports=studentService;