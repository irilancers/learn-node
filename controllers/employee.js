
const jsonData = require('../models/employee/employee.json');

const getEmployees = (req,res)=>{
    
    res.json(jsonData);
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
    sample}
