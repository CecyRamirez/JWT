const config = require('../routes/config.js');

//require('dotenv').config();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USERNAME,
  password: config.PASS,
  database: config.DB
});
//console.log(config)
connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }else{
    console.log("conexión exitosa");
  }
});

module.exports=connection;