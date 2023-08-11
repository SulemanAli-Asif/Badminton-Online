const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const router = require('./routes/routes');

const app=express();

app.use(expressLayouts);
app.set("view engine","ejs");
app.set('layout','./layouts/main.ejs')
app.use(express.static('public'))

app.get('',router);

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})