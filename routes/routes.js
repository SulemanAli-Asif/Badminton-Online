const { homeRoute, } = require('../controller/controller');

const router=require('express').Router();

//getting the home route
router.get('',homeRoute);

//getting the products route
router.get('/products',productsRoute);

//getting products form each category
router.get('/product/:category',categoryRoute);

//getting a single product
router.get('/products/:id',singleProductRotue);



module.exports=router