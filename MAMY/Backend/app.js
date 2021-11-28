const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

var cors = require('cors')
app.use(cors())
app.use(express.json());


const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));
;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const home =require('./routes/homeRoute');
const adminHome =require('./routes/adminRoute');

app.use('/Home',home);
app.use("/AdminHome",adminHome);

app.get('/', (req, res) => {

 res.redirect('/Home')

});


const port = process.env.PORT   ;

app.listen(port, () => console.log(`Server running on port ${port}`));