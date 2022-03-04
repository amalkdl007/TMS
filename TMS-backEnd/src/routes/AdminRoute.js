const express = require("express");
const adminRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");
const nodemailer=require('nodemailer')

function approvemail(id){
    enrollment_data.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail,com',
      secure:true,
      auth: {
             user: 'tmsa36467@gmail.com',
             pass: 'fsdnorka2021b3'
         },
         tls:{
             rejectUnauthorized: false
           }
     })
    
    
    var mailOptions = {
      from: 'tmsa36467@gmail.com',
      to: profile.email_address,
      subject: 'Welcome to ICTAK-'+ profile.first_name,
      html:`<h2>Greetings from ICTAK</h2>
      
      <p>Hello <b>${profile.first_name}</b> ,your request to join as ICTAK trainer is approved.
      Login into your profile using below credintials</p>
      <ul>
      <li>ICTAK ID : ${profile._id}</li> 
      <li>Email :${profile.email_address}</li>  
      <li>Password :${profile.password}</li>   
      <li>EmploymentType :${profile.emptype}</li>  
      </ul>
      `
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.json('Email not sent.Check again');

                      
      } else {       
        res.json('Email sent');
      }
    });
   
   });
}



// approve
adminRouter.put('/approve',(req,res)=>{   
    //console.log(req.body)
    const email=req.body.email;
    emptype=req.body.employment;
    //console.log(emptype);


    enrollment_data.findOneAndUpdate({email_address:email},{$set:{
        isApproved:"true",
        emptype:emptype
      }})
      .then(function(data){
        //console.log(data)
        const id=data._id
        approvemail(id)

        
      })
})

//reject trainer

adminRouter.delete('/deleteData',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const mail=req.body.entry
    //console.log(mail)
    enrollment_data.findOneAndDelete({email_address:mail})
    .then(function(){
      res.status(200).json('Entry rejected')
    })
  })


module.exports = adminRouter;