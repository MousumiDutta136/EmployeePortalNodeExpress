// get all employees
//route: GET /api/employees
//accessibility: public

const getEmployee = (req,res) => { 
  res.status(200).json({message:"Get all employees"});
  
}

//get an employee by id
//route: GET /api/employees/:id
//accessibility: public


// create an employee
//route: POST /api/employees
//accessibility: public
const createEmployee = (req,res) => { 
  res.status(201).json({message:"Create an employee"});  
}

//update an employee by id
//route: PUT /api/employees/:id
//accessibility: public
const updateEmployee = (req,res) => { 
  res.status(200).json({message:`get employee for id  ${req.params.id}`});  
}

//delete an employee by id
//route: DELETE /api/employees/:id
//accessibility: public


module.exports = {getEmployee, createEmployee, updateEmployee};

