const http = require("http");
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
res.statuscode = 200;
res.setHeader('Content-Type','text/html');
res.end('<h1>hello World2!!</h1>');
} );


server.listen(port,hostname,() =>{
console.log(`This server is Running ${port}`);
});


const hello = require("./hello ");
console.log(hello);

const output = require("./sample");
console.log(output);
console.log(output.sample);