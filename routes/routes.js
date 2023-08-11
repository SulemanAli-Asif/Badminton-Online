const router=require('express').Router();

router.get('',(req,res)=>{
    const locals={
        title:"Home"
    }
    res.render('index',{locals});
})

module.exports=router