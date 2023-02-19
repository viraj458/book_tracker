const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookRoute = require('./routes/bookRoute')

//express app
const app = express();


//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.method, req.path)
    next()
})

mongoose.set('strictQuery', false);

//initial route
app.use('/api/books', bookRoute)


//connet to mongo
mongoose.connect(process.env.MONGO)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
        console.log('connected to database and listening to', process.env.PORT)
        })
    })
    .catch((err)=>{
        console.error(err);
    })
