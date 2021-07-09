
const departmentModel = require('../models/department');

async function findAll(obj){
    return await departmentModel.findAll(obj);
}

module.exports = {findAll}
