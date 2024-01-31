const mongoose = require("mongoose");
const dbConnection = async ()=>{
  try{
    const connectionString = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connection successful", 
    connectionString.connection.host,
    connectionString.connection.name);
  } catch(error){
    console.log(error);
    process.exit(1);
  }
}

module.exports = dbConnection;