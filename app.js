
//npm init -y
//npm install expresss
//nodemon = without nodemon node.js with that npm run dev
//npm i mongoose


//call express and store the function in one variable
const express = require("express")
const app = express()

//define the port which we are going to use
const port = 5000

//call mongoose
const mongoose = require('mongoose');

//connect with db (mongodb)
mongoose.connect('mongodb://localhost:27017/trail').then((backend) =>{console.log("DB is connected");
}).catch((backend) => {console.log("DB not connected");
})

// defining schema what are the values we used and required fields are mentioned whether its string or number is defined here
const UserSchema = new mongoose.Schema({
    name:String,
    mobile:Number
})

// the defined schema stored in one variable so we can use easily wherever we can during the api call
const User = mongoose.model("User",UserSchema)


//for our reference it can be used in which port it connected
app.listen(port,() => {
    console.log(`Server is running in ${port}`);
    
})
//basic api structure .it has one request and one response ,we can get the values through schema
app.get('/',(req,res) =>{
    res.send("Backend trail ")
})