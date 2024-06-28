const asyncHandler = require("express-async-handler");
const studentService = require('../services/student.service');

const studentCtrl={};

studentCtrl.signup=asyncHandler(async(req,res)=>{
    
})
studentCtrl.getAllStudent=asyncHandler(async(req,res)=>{
    const students = await studentService.getAllStudent();
    if(students.length > 0){
        res.status(200).json(students)
    }else{
        res.status(404).json({ message: 'No students found.' });
    }
})
studentCtrl.getAllStudentByClass=asyncHandler(async(req,res)=>{
    const students = await studentService.getAllStudentByClass({ classname: req.params.id })
    if (students.length > 0) {
      res.status(200).json(students)
    } else {
      res.status(404).json({ message: 'No students found.' })
    }
})
studentCtrl.getAllStudentByClassAttendance=asyncHandler(async(req,res)=>{
    const students = await studentService.getByClassAttendance({
        attendance_date: new Date().format('dd-MM-YYYY'),
        classname: req.params.id,
      })
      if (students.length > 0) {
        res.status(200).json(students)
      } else {
        res.status(404).json({ message: 'No students found.' })
      }

})
studentCtrl.getStudentByNameClassRoll=asyncHandler(async(req,res)=>{
    
})
studentCtrl.takeAttendance=asyncHandler(async(req,res)=>{})
studentCtrl.deleteById=asyncHandler(async(req,res)=>{})
studentCtrl.payFees=asyncHandler(async(req,res)=>{})

module.exports=studentCtrl;

