const express = require("express");
const router = express.Router();

const {getEmployee, createEmployee, updateEmployee} = require("../controllers/employeeController");
//get all emplotyees
router.route("/").get(getEmployee);
//post
router.route("/").post(createEmployee);
//get one employee by id
router.route("/:id").get(updateEmployee);
//put
router.route("/:id").put((req,res) => { 
  res.status(200).json({message:`Update employee for id  ${req.params.id}`});  
})
//delete
router.route("/:id").delete((req,res) => { 
  res.status(200).json({message:`delete employee for id  ${req.params.id}`});  
})

module.exports = router;