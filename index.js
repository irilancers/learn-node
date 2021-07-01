
const express = require('express');
const utils = require('./utils');
const employee = require('./controllers/employee');
const cors = require('cors')

const app = express();
app.use(cors());

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

//--------------------------------------------------------------------------------------- Employee

app.get('/employees',employee.getEmployees);
app.get('/employee/:employeeId',employee.getEmployee);
app.post('/employee',employee.addEmployee);
app.put('/employee',employee.editEmployee);
app.delete('/employee',employee.deleteEmployee);

app.get('/sample',employee.sample);


//---------------------------------------------------------------------------------------

  app.get('/welcome',utils.welcome);

app.listen(3000,()=>{console.log(`server is running on port 3000`);});
