// get all employees
//route: GET /api/employees
//accessibility: public

const getEmployees = async (req,res) => { 
  res.status(200).json({message:"Get all employees"});
  
}

//get an employee by id
//route: GET /api/employees/:id
//accessibility: public
const getEmployee = async (req,res) => { 
  res.status(200).json({message:`get employee for id  ${req.params.id}`});  
}

// create an employee
//route: POST /api/employees
//accessibility: public
const createEmployee = async (req,res) => { 
  console.log("The request for create employee" , req.body);
  const {name, email} = req.body;
  if(!name || !email){
    res.status(400);
    throw new Error("All fields are required!");
  }
  res.status(201).json({message:"Create an employee"});  
};

//update an employee by id
//route: PUT /api/employees/:id
//accessibility: public
const updateEmployee = async (req,res) => { 
  res.status(200).json({message:`Update employee for id  ${req.params.id}`});  
};

//delete an employee by id
//route: DELETE /api/employees/:id
//accessibility: public
const deleteEmployee = async (req,res) => { 
  res.status(200).json({message:`delete employee for id  ${req.params.id}`});  
}


module.exports = {getEmployees, 
  getEmployee, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee};

