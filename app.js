

// express require and port setup 

const express = require('express')
const app = express()


const port=(8080)
require('./Models')


let usrcntrl=require('./controllers/userController')

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.get("/add",usrcntrl.addUser) 


app.listen(port,()=>{
    console.log("app is running on port 8080")
})



