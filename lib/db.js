const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MonstaX15',
  database : 'midb'
});

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }else{
    console.log("conexión exitosa");
  }
});

module.exports=connection;