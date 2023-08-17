const { homeRoute, productRoute, categoryRoute, singleProductRoute, } = require('../controller/controller');

const router=require('express').Router();


//getting the home route
router.get('/',homeRoute);

//getting the products route
router.get('/products',productRoute);

//getting products form each category
router.get('/product/:category',categoryRoute);

//getting a single product
router.get('/products/:id',singleProductRoute);



module.exports=router