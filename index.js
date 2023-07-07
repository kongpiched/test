const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000,() =>{
    console.log ("Sever Start on port :3000");
})

app.get("/test",(req,res)=>{
    res.json("Hello World");
})