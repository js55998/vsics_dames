import Student from "../models/student/student.model";
import StudentFees from "../models/student/studentFees.model";
import StudentAttendance from "../models/student/studentAttendance.model";

const createStudent = async (studentpayload) => {
  const newStudent = await Student.create(studentpayload);
  return newStudent;
};
const updateStudentById = async (studentid, updatedpayload) => {
  const updateStudent = await Student.findByIdAndUpdate(
    studentid,
    updatedpayload,
    { new: true }
  );
  return updateStudent;
};
const deleteStudentById = async (studentid) => {
  const deleteStudent = await Student.findByIdAndDelete(studentid);
  return deleteStudent;
};
const getAllStudent = async () => {
  const students = await Student.find({});
  return students;
};
const getStudentById = async (studentid) => {
  const student = await Student.findById(studentid);
  return student;
};

const getAllStudentByClass = async (className) => {
  const students = await Student.find({ classname: className });
  return students;
};

const getOneStudentByClass = async (className) => {
  const student = await Student.findOne({ classname: className })
    .sort({ roll_no: -1 })
    .limit(1);
  return student;
};
const getByClassAttendance = () => {};

const searchStudentByNameClassRoll = async (searchQuery) => {
  const student = await Student.find({
    student_name: searchQuery.name,
    classname: searchQuery.className,
    roll_no: parseInt(searchQuery.rollNo),
  });
  return student;
};

const createAttendance = async (attendanceData) => {
  const newAttendance = await StudentAttendance.create({
    class_teacher: attendanceData.teacher,
    attendance_date: Date.now(),
    classname: attendanceData.className,
    students: attendanceData.Students,
  });
  return newAttendance;
};

const updateAttendance = async (re_attendanceData) => {
  const updatedAttendance = await StudentAttendance.updateOne({
    _id: re_attendanceData._id,
    $set: { students: re_attendanceData.students },
  });
  return updatedAttendance;
};

const getOneAttendance = async (searchQuery) => {
  const Attendance = await StudentAttendance.findOne({
    attendance_date: searchQuery.attendanceDate,
    classname: searchQuery.className,
  });
  return Attendance;
};

const payFees = async (fees_details) => {
  const feesSubmit = await StudentFees.create(fees_details);
  return feesSubmit;
};
const totalFees = async () => {
  const fees_info = await StudentFees
    .find()
    .select(
      "monthly_fees hostel_fees laboratory_fees computer_fees exam_fees miscellaneous "
    )
    .select("-_id");
};
