const employeeModel = require('../models/employee');

const addEmployee = (obj)=>{
    return employeeModel.addEmployee(obj);
}

module.exports = {addEmployee}
