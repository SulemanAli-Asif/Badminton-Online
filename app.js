const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const router = require('./routes/routes');
const dotenv=require('dotenv');
const connectDB = require('./DB/connection');

const app=express();
dotenv.config();

app.use(expressLayouts);
app.set("view engine","ejs");
app.set('layout','./layouts/main.ejs')
app.use(express.static('public'))

//DB connection
connectDB();

//routes
app.get('',router);

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})