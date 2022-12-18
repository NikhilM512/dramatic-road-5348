const express = require("express");
const Users = require("./user.model");

const app = express.Router();

app.post("/login",async(req,res)=>{
    const { mobile } = req.body;
    try {
      let user = await Users.findOne({ mobile });
  
        if (user?.mobile) {
         
        res.send({
          token: `${user.id}`,
        });
      }
    } catch (e) {
      res.status(404).send(e.message);
    }
})

app.post("/singleuser",async(req,res)=>{
    const {id} = req.body;
    try {
        let user = await Users.findById({"_id":id});
        if(user?.id){
            res.send(user);
        }else{
            res.status(404).send({message:"Please enter correct token "}) 
        }
    } catch (error) {
        res.status(404).send({message:"Please enter correct token "})
    }
})

app.post("/signup",async(req,res)=>{
    const {name,email,mobile} = req.body;
    let existingUser = await Users.findOne({email});
    if(existingUser?.email){
        res.send({message:"Cannot create User with existing email or mobile"})
    }else{
        try {
            let user = await Users.create({
                name,email,mobile
            })
            res.send({token:`${user.id}`,message:"Signup Successfull"});
        } catch (e) {
            res.status(404).send(e.message);
        }
    }
   
})

module.exports = app;