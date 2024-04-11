const express =require("express");

const app=express();
const PORT=8000;


app.get('/users',(req,res)=>{
    return res.json()
})


app.listen(PORT,()=>console.log(`Server started to PORT 8000`));