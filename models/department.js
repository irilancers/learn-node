
const oracledb = require('oracledb');
const dbConfig = require('../dbconfig');
const utils = require('../utils/utils');

async function findAll(obj){
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const resDoFilter = utils.doFilter(obj.filter);
        console.log(resDoFilter);
        const result = await connection.execute(`begin dept_prc(:error,:p_page,:p_size,:p_filter,:p_id,:result);  end;`,
        {
            error:{type:oracledb.STRING,dir:oracledb.BIND_OUT},
            p_page:obj.page,
            p_size:obj.size,
            p_filter:resDoFilter,
            p_id:1,
            result:{type:oracledb.STRING,dir:oracledb.BIND_OUT,maxSize:2000}
        }
        )
        //console.log('connection is successful',result.outBinds);
        return result.outBinds;
    } catch (error) {
        console.error(error);
        return null;
    }
    finally{
        try {
            if(connection){
                await connection.close();
                // setTimeout(async ()=>{                   
                // },10000);                
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
} 

module.exports = {findAll}
