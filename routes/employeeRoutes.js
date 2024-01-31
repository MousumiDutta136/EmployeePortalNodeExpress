const express = require("express");
const router = express.Router();

const {getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee} = require("../controllers/employeeController");
//get all emplotyees
router.route("/").get(getEmployees);
//post
router.route("/").post(createEmployee);
//get one employee by id
router.route("/:id").get(getEmployee);
//put
router.route("/:id").put(updateEmployee)
//delete
router.route("/:id").delete(deleteEmployee);

module.exports = router;