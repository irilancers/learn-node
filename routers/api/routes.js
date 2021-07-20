
const express = require('express');
const employee = require('../../controllers/employee');
const departmentController = require('../../controllers/department');
const fileManagementController = require('../../controllers/fileManagement');
const AuthenticationController = require('../../controllers/Authentication');

const router = express.Router();

router.get('/employees',employee.getEmployees);
router.get('/employee',employee.searchEmployee);
//app.get('/employee/:employeeId/:salary',employee.searchEmployee);
//app.get('/employee/:employeeId',employee.getEmployee);
router.post('/employee',employee.addEmployee);
router.put('/employee',employee.editEmployee);
router.delete('/employee',employee.deleteEmployee);


router.get('/departments',departmentController.findAll);

router.post('/upload',fileManagementController.uploadImages);
router.get('/download',fileManagementController.downloadImages);
router.get('/getAllFiles',fileManagementController.getAllFiles);

router.post('/login',AuthenticationController.login);
//router.get('/testToken',AuthenticationController.testToken);

module.exports = router;
