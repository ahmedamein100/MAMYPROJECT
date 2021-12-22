const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { decodeBase64 } = require('bcryptjs');
require('dotenv').config();
const router = express.Router();
let User = require('../models/user');

router.get('/',function(req,res) {
  res.redirect("/AdminHome");

})

router.get('/login',function(req,res) {

    res.send("hiiii");
        
    });

router.post('/login',function(req,res) {
      const username = req.body.username;
      const password = req.body.password;

      console.log(username)
      console.log(password)

      User.find({username: username}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
});


        router.post('/UserLogin',function(req,res) {
          const username = req.body.username;
          const password = req.body.password;

          console.log(username)
          console.log(password)

          User.findOne({username: username , password: password}, function(err, result) {
            if (err) {
              console.log("HENA");
              res.send(err);
            } else {
              
              if(result!==null)
              {console.log(result);
                res.send(result);}
              else
              {res.send({_id: "null"});}
            }
          });
        });



        router.post('/SignUp',function(req,res) {
          const newUser = new User({lastName:req.body.lastName,firstName:req.body.firstName,username:req.body.UserName,password:req.body.Password,email:req.body.Email,passportNumber:req.body.PassportNumber});
          newUser.save(function (err, book) {
              if (err) return console.error(err);
              console.log(newUser);
            });
          })




module.exports = router;