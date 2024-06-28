const express = require("express");
const router = express.Router()
const studentCtrl = require('../controllers/student.controller')

router.get('/',studentCtrl.getAllStudent);
router.get('/class/:id',studentCtrl.getAllStudentByClass);
router.get('/class/:id/attendance',studentCtrl.getAllStudentByClassAttendance);
router.get('/search/:name/:class/:roll_no',studentCtrl.getStudentByNameClassRoll);
router.post('/sighup',studentCtrl.signup);
router.post('/attendance/:classname',studentCtrl.takeAttendance);
router.post('/fees/:id',studentCtrl.payFees);
router.delete('/delete/:id',studentCtrl.deleteById);

module.exports=router;
