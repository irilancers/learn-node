const bcrypt = require('bcrypt');

// bcrypt.hash("123",(err,hash)=>{
//     console.log({err,hash});
// })
const myhash =  '$2b$10$jlB8be7ji1aOgoyzUQ5Jn.d0v5UJPpl2CmyiuWBNkHVv/bf6FO7cO';
bcrypt.compare("123",myhash,(err,result)=>{
    console.log({err,result});
})