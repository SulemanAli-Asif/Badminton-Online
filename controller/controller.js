const express=require('express');

exports.homeRoute = (req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('index',{locals});
}

exports.productRoute = (req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('products',{locals});
}

exports.categoryRoute = (req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('products',{locals});
}

exports.singleProductRoute = (req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('products',{locals});
}