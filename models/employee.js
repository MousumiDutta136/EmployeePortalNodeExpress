const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, "Enter employee name here!"],
  },
  email:{
    type:String,
    required:[true, "Enter employee email address here!"]
  }
})

module.exports = mongoose.model("Employee",employeeSchema)