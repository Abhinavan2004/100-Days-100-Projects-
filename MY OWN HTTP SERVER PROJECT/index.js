const http = require('http');
const fs = require("fs");

const myserver = http.createServer((req ,res) =>{
    // console.log("request recieved");        // 1st thing
    // console.log(req);                       // 2nd thing
    const data = '${Date.now()}: request recieved \n' ;
    fs.appendFile("log.txt" , data , (err, data) =>{
        res.end("Response successfully sent !!!!");
    })
    // res.status(200).json();
    res.end("Response sent");
}) 

myserver.listen(3278);