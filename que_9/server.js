const mysql=require("mysql");

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'empoyee_databse'
})

const employees=()=>{
    return new Promise((resolve,reject)=>{
      con.query("SELECT * FROM employee",(err,result,fields)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
      })  
    })
}

con.connect((err)=>{
    if(err){
        console.log("error : "+err)
    }else{
        con.query("INSERT INTO `employee` (`emp_id`, `emp_first_name`, `emp_last_name`, `emp_age`) VALUES (NULL, 'Vasu', 'Kakdiya', '17')",(err,result)=>{
            if(err){
                console.log("error : "+err)
            }else{
                console.log("record Inserted")
            }
        })
        employees().then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log("error : "+err)
        })
    }
})