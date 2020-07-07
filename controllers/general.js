//Harmanpreet kaur
//ID- 103725198

const express = require('express')
const router = express.Router()
const pro =require('../model/topmeals');
const pro1 =require('../model/topmeals');

const prod = require('../model/productlist');


router.get("/",(req,res)=>{
    res.render("general/index",{
        title:"Home Page",
        data: pro.getAllpro()
        //data1:pro1.getAllpro1()
    })

});

router.get("/prolisting",(req,res)=>{
    res.render("general/prolisting",{
        title:"Product List",
        data2: prod.getallprod()
    })
});

router.get("/customer",(req,res)=>{
    res.render("general/customer",{
        title:"Register"
    })
});

router.post("/customer",(req,res)=>
{
    const error =[];
    const error1=[];
    const error2=[];
    const error3=[];
    
    if (req.body.N1 == "") {
        error.push("Please enter your first name");
    }

    if (req.body.email == "") {
        error1.push("Please enter an email");
    }
    if (req.body.psw == "") {
        error2.push("Please enter a password");
    } 
    const reg_e = req.body.psw.match(/^.{6,14}$/);
    if (req.body.psw == req.body.pswrepeat & reg_e < 14) {
        error3.push("Password does not match");
        error3.push("Password must be between 6 and 14 characters.");
    } 
    
    if ( error.length > 0 || error1.length > 0 || error2.length > 0)
    {
        res.render("general/customer",
                {
                    msg: error,
                    msg1:error1,
                    msg2:error2,
                    msg3:error3

                });
    }  
  
  else
  {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const {N1,email,psw} = req.body;
    const msg = {
    to: `${email}`,
    from: `southindiancuisine1@gmail.com`,
    subject: 'Welcome to the South Indian Cuisine',
    html: 'Thank you for joining us.We are looking forward to serve you the best. Please visit our website to order food Online.',
    };
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/dashboard");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    });
  }
});

router.get("/dashboard",(req,res)=>{
    res.render("general/dashboard",{
    })
});

router.get("/login",(req,res)=>{
    res.render("general/login",{
        title:"Login"
    })
});

/*router.post("/login",(req,res)=>{
    const errors=[];
    const error=[];

    if(req.body.emaill=="")
    {
        errors.push("Please Enter a valid Email");
    }
    if(req.body.psww=="")
    {
        error.push("Please enter Password");
    }    
    if (errors.length > 0 || error.length > 0) 
    {

        res.render("login",
            {
               title:"login",
                emsg: errors,
                emsg2:error
                
            })
    }
    else
    {
        res.redirect("/");
    }
    
});
*/

module.exports=router;