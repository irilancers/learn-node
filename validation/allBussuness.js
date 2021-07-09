
const validateEmployeeValues = (obj)=>{

    if(Number(obj.employeeId) in {NaN}){
        return 'Employee Id is Not number ';

    }

}


module.exports = {validateEmployeeValues};