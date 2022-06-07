const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extends:true}));

mongoose.connect('mongodb://localhost:27017/todolistDB');

const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const User = mongoose.model('User',userSchema);

app.get("/api/login",function (req,res){
    res.send("you");
})

app.post("/api/login",function (req,res){
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    res.send("you");
})

app.listen(3030,function (){
    console.log("Server running on port 3030!");
})