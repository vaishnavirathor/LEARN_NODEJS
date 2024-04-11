//express
// const http =require("http");
const express =require("express");

const app=express();

app.get("/",(req,res)=>{
    return res.send("Hello from home page");
});
app.get("/about",(req,res)=>{
    return res.send(`Hello its ${req.query.name} this is about us`);
});

// const myServer=http.createServer(app);

// myServer.listen(3000,()=>console.log("Server Started"));
app.listen(3000,()=>console.log("server started"));