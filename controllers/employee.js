
const employeeModel = require('../models/employee.js');
const employeeService = require('../services/employee');
const AuthenticationController = require('../controllers/Authentication');

const getEmployees = (req,res)=>{
    AuthenticationController.authenticateToken(req,res);
    res.json({a:1});
}



const sample=(req,res,next)=>{
    //let strHtml = "<html><body><h2><ul>";
    //strHtml += `</ul><li>TEST</li></h2></body></html>`;
    //res.render('index', { title: 'Hey', message: 'Hello there!' });

   // res.render('test.html');
   res.send('sample');
}

const getEmployee = (req,res,next)=>{
    const employeeId = req.params['employeeId'];
    const result = jsonData.find(item=>item.employeeId==employeeId);
    if(result){
        res.json(result)
    }
    else{
        res.sendStatus(204);
    }
    //res.json(result ? result:{});
}

const searchEmployeeByParams = (req,res,next)=>{
    const employeeId = req.params['employeeId'];
    const salary = req.params['salary'];

    const result = jsonData.filter(item=>item.employeeId==employeeId || item.salary==salary);
    console.log(employeeId,salary,result);

    if(result){
        res.json(result)
    }
    else{
        res.sendStatus(204);
    }
    //res.json(result ? result:{});
}

const searchEmployeeByHeaders = (req,res,next)=>{

    const {employee_id,employee_salary} = req.headers;
    console.log('headers',{employee_id,employee_salary});
    const obj = {
        employeeId : employee_id,
        salary : employee_salary
    }
    const result = employeeModel.filterEmployee(obj);

    if(result){
        res.json(result)
    }
    else{
        res.sendStatus(204);
    }
    //res.json(result ? result:{});
}

const searchEmployeeByQuery = (req,res,next)=>{


    const {employeeId,salary} = req.query;

    
    const obj = {
        employeeId ,
        salary 
    }

    console.log(' query',obj);

    const result = employeeModel.filterEmployee(obj);

    if(result){
        res.json(result)
    }
    else{
        res.sendStatus(204);
    }
    //res.json(result ? result:{});
}


const addEmployeeByBody = (req,res,next)=>{


    const {employeeId,firstName,salary} = req.body;

    const validateEmployee=require('../validation/allBussuness');
    
    const obj = {
        employeeId ,
        firstName,
        salary 
    }

    const resultValidation = validateEmployee.validateEmployeeValues(obj);
    if(resultValidation){
        res.status(417).json({error:resultValidation});
    }

    const messageAdded = employeeService.addEmployee(obj);
    if(messageAdded)
        res.status(417).json({message:messageAdded});


    //const result = employeeModel.addEmployee(obj);

    if(!messageAdded){
        res.status(201).json({message:'Employee is added successfully'});
    }
   
}

const addEmployee = (req,res)=>{
    res.send('addEmployee');
}

const editEmployee = (req,res)=>{
    res.send('editEmployee');
}

const deleteEmployee = (req,res)=>{
    res.send('deleteEmployee');
}

module.exports = {getEmployee,getEmployees,addEmployee,editEmployee,deleteEmployee,
    sample,
    searchEmployee:searchEmployeeByQuery,
    addEmployee:addEmployeeByBody
}
