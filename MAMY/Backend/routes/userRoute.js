const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();
const bodyParser = require('body-parser');
const { decodeBase64 } = require('bcryptjs');
let User = require('../models/user');
let Flight = require('../models/flight');

    router.post('/searchFlights',function(req,res) {
        var numberoftrue = 0
        const BDeparture= Boolean(req.body.Departure !== null)
        if(BDeparture)
        {numberoftrue++;
          console.log(numberoftrue+"BDep");}
        const BArrival= Boolean(req.body.Arrival !== null)
        if(BArrival)
        {numberoftrue++;
          console.log(numberoftrue+"BArrival");}
          
      
        
        
      const BFrom = Boolean(req.body.From !== '')
      if(BFrom)
      {numberoftrue++;
        console.log(numberoftrue+"From");}
      const BTo = Boolean(req.body.To !== '')
      if(BTo)
      {numberoftrue++;
        console.log(numberoftrue+"To");}
      const BCapinClass = Boolean(req.body.CabinClass !== "")
      if(BCapinClass)
      {numberoftrue++;
        console.log(numberoftrue+"capin class");}
      const BNumberofPassengers = Boolean(req.body.NumberofPassengers !== -1)
      if(BNumberofPassengers)
      {numberoftrue++;
        console.log(numberoftrue+"NumberofPassengers");}
      
       var x = [];
     
      console.log(numberoftrue);
    
         Flight.find({
        },function(err, result) 
         {//console.log(x);
           
            while(result.length>0)
            {    var target =0;
                 var tmp = result.pop();
               //  console.log(tmp.Departure)
                // console.log( new Date(req.body.Departure))
                // console.log('----------------')
                
                 if(BFrom&&tmp.From===req.body.From)
                 {target++
                console.log("FROM")
                
                }
                 if(BTo&&tmp.To===req.body.To)
                 {target++
                    console.log("To")
                }
                 if(BCapinClass)
                 {
                   if(BNumberofPassengers)
                   {switch(req.body.CabinClass){
                    case "1": if(tmp.Business>=req.body.NumberofPassengers)
                    {target++;
                        target++;
                        console.log("class Buss BNumber")
                    }break;
                    case "2": if(tmp.First>=req.body.NumberofPassengers)
                    {
                        target++;
                        target++;
                        console.log("class First BNumber")
                    }
                    break;
                    case "3": if(tmp.Economy>=req.body.NumberofPassengers)
                    {
                        target++;
                        target++;
                        console.log("class Economy BNumber")
                    }
                    break;

                  }}
                   else
                   {
                      switch(req.body.CabinClass){
                        case "1": if(tmp.Business>0)
                        {target++;
                            console.log("class Buss notBNumber")
                        }break;
                        case "2": if(tmp.First>0)
                        {
                            target++;
                            console.log("class First notBNumber")
                        }
                        break;
                        case "3": if(tmp.Economy>0)
                        {
                            target++;
                            console.log("class Econ notBNumber")
                        }
                        break;

                      }


                   }


                 }
                 //if(BBusiness&&tmp.Business===req.body.Business)
                 //{target++}
                 //if(BFirst&&tmp.First===req.body.First)
                 //{target++}
                 //if(BEconomy&&tmp.Economy===req.body.Economy)
                 //{target++}
                 //if(BDate&&tmp.Date.getTime()===new Date(req.body.Date).getTime())
                 //{target++}
                 //if(BDate&&tmp.Date.getTime()===new Date(req.body.Date).getTime())
                 //{target++}
                 if(BArrival&&tmp.Arrival.getTime()===new Date(req.body.Arrival).getTime())
                 {target++
                    console.log("Arrival")
                }
                 if(BDeparture&&tmp.Departure.getTime()===new Date(req.body.Departure).getTime())
                 {target++
                    console.log("Dedp")
                
                }
                 console.log(tmp);
                 console.log(numberoftrue+" da el target el mafrood");
                 console.log(target+" da ely welena leh el mafrood");
                 console.log("----------------------");
                if(target === numberoftrue)
                {x.push(tmp)}
                         

            }
            while(x.length>0)
            {result.push(x.pop())}
            console.log(result)
          res.send(result);
        }
        
        )
       

       
        })

    router.get('/SelectedFlight/:id',function(req,res) {
        //   console.log(req.params.id) res.send(flights)
          Flight.findById(req.params.id)
          .then(flights =>res.send(flights) )
          .catch(err => res.status(400).json('Error: ' + err));
          // console.log(req.params.id+"Hello")
          })


          router.get('/personalInformation/:id',function(req,res)
          
          {
            console.log(req.params.id);
            User.findById(req.params.id)
          .then(users =>res.send(users) )
          .catch(err => res.status(400).json('Error: ' + err));

          }
          
          )
          router.post('/editUser/:id',function(req,res) {
            User.findById(req.params.id)
            .then(curruser => {
                    curruser.passportNumber = req.body.passportNumber;
                    curruser.email = req.body.email;
                    curruser.firstName = req.body.firstName;
                    curruser.lastName = req.body.lastName;

            
            console.log("///////////////////////////")
            console.log(curruser.lastName)
            curruser.save(curruser)
                    .then(() => res.json('user updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            
            })
            .catch(err => res.status(400).json('Error: ' + err));
            })
          
          
          
          router.get('/flightdata/:id',function(req,res) {
            //   console.log(req.params.id) res.send(flights)
            // console.log(req.body)
            // console.log("////////////")
              Flight.findById(req.params.id)
              .then(flights =>res.send(flights))
              .catch(err => res.status(400).json('Error: ' + err));
              
              })      
          
          

              router.post('/chooseSeat/:id',function(req,res) {
              //  console.log(req.body.ID );
               console.log(req.params.id +"hope");
                User.findById(req.params.id)
                .then(users => {
                  // console.log(req.body.seatsArr);
                  var temp={
                    Depflight_ID:req.body.id1,
                    Retflight_ID:req.body.id2,
                    seats:req.body.seatsArr,
                    Class:req.body.class,
                    Class2:req.body.class2
                  }
                  console.log(users);
                  console.log(req.body.seatsArr+"#############################################");
                  users.seats.push(temp);
                  users.save()
                        .then(() => res.json('Flight updated!'))
                        .catch(err => res.status(400).json('Error: ' + err));
                  
                })
                .catch(err => res.status(400).json('Error: ' + err));
                         
                    })

                    router.post('/classBoolean/:id',function(req,res) {
                      Flight.findById(req.params.id)
                      .then(currflight => {
                        console.log(req.params.id);
                        if(req.body.class2 === 1)
                        {  
                          // console.log(currflight);
                          // console.log("index backend"+req.body.index);
                          // console.log(req.body.index);
                          // for(var i=0;i<currflight.BusinessSeats ;i++){
                          //   currflight.BusinessSeats[i] = req.body.Bool[i];
                          // }
                          currflight.BusinessSeats = req.body.Bool2;
                          // console.log(currflight.BusinessSeats[req.body.index]);
                        }
                        else{
                          if(req.body.class2 === 2)
                        {  
                          // console.log(currflight);
                          // console.log("index backend"+req.body.index);
                          // console.log(req.body.index);
                          // for(var i=0;i<currflight.BusinessSeats ;i++){
                          //   currflight.BusinessSeats[i] = req.body.Bool[i];
                          // }
                          currflight.FirstSeats = req.body.Bool2;
                          // console.log(currflight.BusinessSeats[req.body.index]);
                        }else{
                          if(req.body.class2 === 3)
                        {  
                          // console.log(currflight);
                          // console.log("index backend"+req.body.index);
                          // console.log(req.body.index);
                          // for(var i=0;i<currflight.BusinessSeats ;i++){
                          //   currflight.BusinessSeats[i] = req.body.Bool[i];
                          // }
                          currflight.EconomySeats = req.body.Bool2;
                          // console.log(currflight.BusinessSeats[req.body.index]);
                        }
                        }
                        } 
                        
                        currflight.save()
                        .then(() => res.json('Flight updated!'))
                        .catch(err => res.status(400).json('Error: ' + err));
                        // console.log("al3ab trai");
                        // console.log(req.body.Bool);
                        // console.log(currflight.BusinessSeats);
                      })
                      .catch(err => res.status(400).json('Error: ' + err));
                          })



                          router.post('/classBoolean2/:id',function(req,res) {
                            Flight.findById(req.params.id)
                            .then(currflight => {
                              console.log(req.params.id);
                              if(req.body.class === 1)
                              {  
                                // console.log(currflight);
                                // console.log("index backend"+req.body.index);
                                // console.log(req.body.index);
                                // for(var i=0;i<currflight.BusinessSeats ;i++){
                                //   currflight.BusinessSeats[i] = req.body.Bool[i];
                                // }
                                currflight.BusinessSeats = req.body.Bool;
                                // console.log(currflight.BusinessSeats[req.body.index]);
                              }
                              else{
                                if(req.body.class === 2)
                              {  
                                // console.log(currflight);
                                // console.log("index backend"+req.body.index);
                                // console.log(req.body.index);
                                // for(var i=0;i<currflight.BusinessSeats ;i++){
                                //   currflight.BusinessSeats[i] = req.body.Bool[i];
                                // }
                                currflight.FirstSeats = req.body.Bool;
                                // console.log(currflight.BusinessSeats[req.body.index]);
                              }else{
                                if(req.body.class === 3)
                              {  
                                // console.log(currflight);
                                // console.log("index backend"+req.body.index);
                                // console.log(req.body.index);
                                // for(var i=0;i<currflight.BusinessSeats ;i++){
                                //   currflight.BusinessSeats[i] = req.body.Bool[i];
                                // }
                                currflight.EconomySeats = req.body.Bool;
                                // console.log(currflight.BusinessSeats[req.body.index]);
                              }
                              }
                              } 
                              
                              currflight.save()
                              .then(() => res.json('Flight updated!'))
                              .catch(err => res.status(400).json('Error: ' + err));
                              // console.log("al3ab trai");
                              // console.log(req.body.Bool);
                              // console.log(currflight.BusinessSeats);
                            })
                            .catch(err => res.status(400).json('Error: ' + err));
                                })


            router.get('/allReservations/:id',function(req,res) {
            //   console.log(req.params.id) res.send(flights)
            console.log("////");
            User.findById(req.params.id)
            .then(user =>res.send(user))
            .catch(err => res.status(400).json('Error: ' + err));
            // console.log(req.params.id+"HHHH")
            })
                                    
       
            



            router.post('/Cancel/:id',function(req,res) {
              User.findById(req.params.id)
              .then(curruser => {
                     var seats = curruser.seats;
                     var seatsfinal = []
                     var len = seats.length
                     for(var i=0;i<len;i++){
                        if(i != req.body.index){
                          seatsfinal.push(seats[i]);
                          console.log(i); 
                        }
                     }
                     curruser.seats=seatsfinal;
                     console.log("XXXXXXXXXXXXXX");
                     
              console.log(curruser.lastName)
              curruser.save(curruser)
                      .then(() => res.json('user updated!'))
                      .catch(err => res.status(400).json('Error: ' + err));
              
              })
              .catch(err => res.status(400).json('Error: ' + err));
              })


module.exports = router ;
