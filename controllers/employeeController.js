const asyncHandler = require("express-async-handler");
const employeeModel = require("../models/employee")
// get all employees
//route: GET /api/employees
//accessibility: public

const getEmployees = asyncHandler(async (req,res) => { 
  const employees = await employeeModel.find();
  //res.status(200).json({message:"Get all employees"});
  res.status(200).json(employees);
});

//get an employee by id
//route: GET /api/employees/:id
//accessibility: public
const getEmployee = asyncHandler(async (req,res) => { 
  res.status(200).json({message:`get employee for id  ${req.params.id}`});  
});

// create an employee
//route: POST /api/employees
//accessibility: public
const createEmployee = asyncHandler(async (req,res) => { 
  console.log("The request for create employee" , req.body);
  const {name, email} = req.body;
  if(!name || !email){
    res.status(400);
    throw new Error("All fields are required!");
  }
  const newEmployee = await employeeModel.create({
    name,
    email
  })
  //res.status(201).json({message:"Create an employee"});  
  res.status(201).json(newEmployee); 
});

//update an employee by id
//route: PUT /api/employees/:id
//accessibility: public
const updateEmployee = asyncHandler(async (req,res) => { 
  res.status(200).json({message:`Update employee for id  ${req.params.id}`});  
});

//delete an employee by id
//route: DELETE /api/employees/:id
//accessibility: public
const deleteEmployee = asyncHandler(async (req,res) => { 
  res.status(200).json({message:`delete employee for id  ${req.params.id}`});  
});


module.exports = {getEmployees, 
  getEmployee, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee};

