const express=require('express');
const Products=require('../model/products')

exports.homeRoute = (req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('index',{locals});
}

exports.productRoute = async (req,res)=>{
    try{
        const locals={
            title:"Products"
        }

        let perPage=9;
        let page=req.query.page||1;

        const data=await Products.aggregate([{$sort :{createdAt:1}}])
        .skip(perPage*page-perPage)
        .limit(perPage)
        .exec();


        const count = await Products.count();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <=Math.ceil(count/perPage);
        
        res.render('products',{
            locals ,
            data,
            current:page,
            nextPage:hasNextPage?nextPage:null,
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({msg:"Error"});
    }
}

exports.categoryRoute = (req,res)=>{
    // const locals={
    //     title:"Home"
    // }
    // res.render('products',{locals});
}

exports.singleProductRoute = (req,res)=>{
    // const locals={
    //     title:"Home"
    // }
    // res.render('products',{locals});
}