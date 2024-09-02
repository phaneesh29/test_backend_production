require("dotenv").config()
const express = require('express')
const app = express()


const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/twitter",(req,res)=>{
    res.send(`https://x.com`)
})

app.get("/login",(req,res)=>{
    res.send("<h1>Login Now</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Youtube Now</h2>")
})

app.listen(port,()=>{
    console.log(`Example app listeing on port ${port}`)
})

