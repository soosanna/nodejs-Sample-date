const fs = require("fs");
const path =require("path")
const dirName=path.join(__dirname,"timeStamps")
const express= require("express");

const app= express();
app.get("/",(req,res)=>{
    res.send("this is my first web server");
})
app.get("/date-time",(req,res)=>
{
    let date = new Date()
    let currenttime = date.toUTCString().slice(0,-3);
    let content = `the current time ${currenttime}`
    console.log(__dirname)
    fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
        
        if(err){
            res.send("err while wrinting file")
            return

        }
        res.sendFile(path.join(dirName,"date-time.txt"))
    })
})
app.listen(9000,()=>console.log(`server start listen in port 9000`))