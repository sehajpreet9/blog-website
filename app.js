const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//const userRoutes = require('./routers/user');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//view engine
app.use(expressLayouts);
app.set('view engine','ejs')
// route
app.get('/',(req,res)=>{
    res.render('index')
})
//public folder for css and js
app.use(express.static('public'))



//mongoos.connect("mongodb://localhost:27017/studentdetails", {useNewUrlParser : true})
//const db = mongoos.connection;
//db.on('eror',()=>{
//    console.log("Err is ");
//})
//db.once('open',()=>{
 //   console.log("Connected");
//})

//app.set('view engine','ejs');
//app.use(express.static('public'))

// body parser 
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())



//app.use('/' , homeRoutes)
//port
const port = process.env.port || 8080;
app.listen(port,()=>{
    console.log('working on port 8080')
})