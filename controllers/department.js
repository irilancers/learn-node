
const departmentService = require('../services/department');
//const departmentModel = require('../models/department');


const findAll = async (req,res)=>{
    const {page,size,filter} = req.query;
    //console.log({page,size});
    const result = await departmentService.findAll({page,size,filter:JSON.parse(filter)});
    console.log(result);
    res.status(200).json(result);
};


module.exports = {findAll};
