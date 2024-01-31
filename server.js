const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;

//get request
/*app.get("/api/employees", (req,res)=>{
  //res.send("Get all employees");
  //res.json({"message":"Get all employees"})
  res.status(200).json({"message":"Get all employees"});

})*/
app.use("/api/employees", require("./routes/employeeRoutes"));

app.listen(port, ()=>{
  console.log(`express server running on port ${port}`)
})
