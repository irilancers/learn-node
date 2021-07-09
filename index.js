
const express = require('express');
var bodyParser = require('body-parser')

const employee = require('./controllers/employee');
const departmentController = require('./controllers/department');

const router = require('./routers/api/routes');

const cors = require('cors')

//------------------------------------------------------------------------------
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());

//------------------------------------------------------------------------------

app.use('/api/v1.0/',router);
//app.use('/api/v1.0/departments',departmentController);

// app.get('/employees',employee.getEmployees);
// app.get('/employee',employee.searchEmployee);
// //app.get('/employee/:employeeId/:salary',employee.searchEmployee);
// //app.get('/employee/:employeeId',employee.getEmployee);
// app.post('/employee',employee.addEmployee);
// app.put('/employee',employee.editEmployee);
// app.delete('/employee',employee.deleteEmployee);


//------------------------------------------------------------------------------

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


app.get('/sample',employee.sample);


//---------------------------------------------------------------------------------------


app.listen(3000,()=>{console.log(`server is running on port 3000`);});
