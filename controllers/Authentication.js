

const jwt = require('jsonwebtoken');
const authenticationModel = require('../models/Authentication');
const secretKey = 'secret key';

const login = (req,res)=>{
    const {user,password} = req.body;

    const result = authenticationModel.login({user,password});
    if(result){
        const token = jwt.sign({
            data: user
          }, secretKey, { expiresIn: 20 });
        
        console.log(token);
        res.status(200).json({status:'OK',message:'Login successful',token:token});
    }
    else
        res.status(200).json({status:'CANCEL',message:'User name or password was not correct'});

}

const authenticateToken = (req,res,next)=>{
    console.log({a:req.headers['authorization']});


    const token = req.headers['authorization'].split(' ')[1]

    jwt.verify(token,secretKey,(err,data)=>{
        if(err)
            res.status(500).json({message:'error',error:err});
        else{
            console.log({data});
           // next();
        }
    })}



module.exports = {login,authenticateToken};
