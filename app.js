const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use('/static', express.static('static'));  //serving static files

app.set('view engine','pug') ;
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    const params= {}
      res.render('index.pug', params);
})
app.get('/price', (req,res)=>{
    const params= {}
      res.render('price.pug');
})
app.get('/contact', (req,res)=>{
    const params= {}
      res.render('contact.pug');
})

app.listen(port,()=>{
    console.log(`the app is successfully started on port ${port}`);
})