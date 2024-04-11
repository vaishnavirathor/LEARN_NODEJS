const http = require("http");
const fs = require("fs");
const url=require('url');


const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.method}${req.url} New Req Recieved\n`;
 const myUrl=url.parse(req.url,true);
 console.log(myUrl);
  fs.appendFile('log.txt', log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
       if(req.method === "GET"){res.end("home page");
        break;
      case "/about":
        const username=myUrl.query.myname;
        res.end(`Hi,${username}.Welcome to About page`);
        break;
      case"/search":
      const search=myUrl.query.search_query;
      res.end("we;come to search"+search);
        // break;
        case"/signup":
        if(req.method==="GET")res.end("this is signup form");
        else if(req.method=="POST"){
          //db
          res.end("success");
        }
      default:
        res.end("404 error");
    }
  });
});

myServer.listen(8002, () => console.log("server started"));