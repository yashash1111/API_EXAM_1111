const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const users = require("file");
const { data } = require('react-router-dom');

app.get('/api/users/:Username',(req,res)=>{
    const Username = (req.params.Username);
    const user = users.find((user)=> user.Username===Username);
    return res.json(users);
     if(user == " "){
        console.log("Username cannot be Empty");
    }
  })

  app.get('/api/users/:Email',(req,res)=>{
    const Email = (req.params.Email);
    const user = users.find((user)=> user.Email===Email);
    return res.json(users);
     if(user == " "){
        console.log("Email cannot be empty");
    }
  })

  app.get('/api/users/:Passward',(req,res)=>{
    const Passward = (req.params.Passward);
    const user = users.find((user)=> user.Passward===Passward);
    return res.json(users);
     if(user <8 && user<16){
        console.log("Passward length must be greater than 8 or less han or equal to 16");
    }
  })


app.listen(PORT, ()=>{
    console.log(`Server is running in http://localhost:${PORT}`);
})