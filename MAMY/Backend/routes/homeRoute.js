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


router.get('/createuser',function(req,res) {

        // create user sprint 2
        
        
        })


router.post('/createuser',function(req,res) {

   // create user sprint 2 
            
            
})




module.exports = router;