const express = require('express');
require('dotenv').config();

//express app
const app = express();


//middleware
app.use((req, res, next)=>{
    console.log(req.method, req.path)
    next()
})


//initial route
app.get('/', (req, res)=>{
    const data = res.send('WELCOME TO API')
})


//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('listening to port 5000')
})