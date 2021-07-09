
const jsonData = require('./employee.json');

const filterEmployee=(obj)=>{
//    return result = jsonData.filter(item=>(obj.employeeId==undefined || item.employeeId==obj.employeeId) || (obj.salary==undefined || item.salary==obj.salary));

    return result = jsonData.filter(item=>(item.employeeId==obj.employeeId || item.salary==obj.salary));
    
}


const addEmployee = (obj)=>{

    const result = jsonData.find(item=>item.employeeId==obj.employeeId);
    if(result)
        return "Employee is exists";

    jsonData.push(obj);

    return null;

}

module.exports = {filterEmployee,addEmployee}
