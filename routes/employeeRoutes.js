const express = require("express");
const router = express.Router();
router.route("/").get((req,res) => { 
  res.status(200).json({message:"Get all employees"});
  
})
//post
router.route("/").post((req,res) => { 
  res.status(200).json({message:"Create an employee"});
  
})
//get one employee by id
router.route("/:id").get((req,res) => { 
  res.status(200).json({message:`get employee for id  ${req.params.id}`});  
})
//put
router.route("/:id").put((req,res) => { 
  res.status(200).json({message:`Update employee for id  ${req.params.id}`});  
})
//delete
router.route("/:id").delete((req,res) => { 
  res.status(200).json({message:`delete employee for id  ${req.params.id}`});  
})

module.exports = router;