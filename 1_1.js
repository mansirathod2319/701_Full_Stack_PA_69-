const http=require("http");
const url=require("url");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    var ul=url.parse(req.url,true);
    if(req.url=="/"){
        fs.readFile('./1_1.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                return res.end("404 page not Found...!!");
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }else if(ul.pathname=='/process' && req.method=='GET'){
        res.write("First Name : "+ul.query.first_name+"\nLast Name : "+ul.query.last_name+"\nAge : "+ul.query.age);
        res.end();
    }else if(ul.pathname=='/process'&&req.method=='POST'){
      let body='';
      req.on('data',chunk=>{
        body+=chunk.toString();
      });
      req.on('end',()=>{
        res.end(body);
      })
    }
});
server.listen(8000);
console.log("The Server Is Running...");