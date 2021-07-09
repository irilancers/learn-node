
const express = require('express');
const employee = require('../../controllers/employee');

const router = express.Router();

router.get('/employees',employee.getEmployees);
router.get('/employee',employee.searchEmployee);
//app.get('/employee/:employeeId/:salary',employee.searchEmployee);
//app.get('/employee/:employeeId',employee.getEmployee);
router.post('/employee',employee.addEmployee);
router.put('/employee',employee.editEmployee);
router.delete('/employee',employee.deleteEmployee);


module.exports = router;
