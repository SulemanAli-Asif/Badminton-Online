const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const router = require('./routes/routes');
const dotenv=require('dotenv');
const connectDB = require('./DB/connection');
const jsonProducts = require('./populate.json')
const Product = require('./model/products')
const mongoosePaginate=require('mongoose-paginate')

const app=express();
dotenv.config();

app.use(expressLayouts);
app.set("view engine","ejs");
app.set('layout','./layouts/main.ejs')
app.use(express.static('public'))
app.use(express.json());

//DB connection
connectDB();


//demo population

// const start = async () => {
//     try {
//       connectDB();
//       await Product.deleteMany()
//       await Product.create(jsonProducts)
//       console.log('Success!!!!')
//       process.exit(0)
//     } catch (error) {
//       console.log(error)
//       process.exit(1)
//     }
//   }

//   start();


//routes
app.use('',router);
app.use('/products',router);

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})