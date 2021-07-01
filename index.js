
const express = require('express');
const utils = require('./utils');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World !!!')
});

app.post('/',  (req, res)=> {
    const date = new Date();
    res.send(`Got a POST request: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
  });

app.put('/updateProduction',  (req, res)=> {
    res.send('updateProduction')
  });

  app.put('/updateCustomers',  (req, res)=> {
    res.send('updateCustomers')
  });


app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user')
  })  

  app.get('/welcome',utils.welcome);

app.listen(3000,()=>{console.log(`server is running on port 3000`);});
