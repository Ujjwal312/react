const Newuser = require("../models/Newuser");
const login = require("../models/login");
const jwt =require("jsonwebtoken");
const JWT_SECRET="zf,gyu.ityftu.cgjvhbjhgf,cgvgk.fcg,hfvhj.vh";
exports.login = async  (req, res)=> {
    try{
      console.log("req body", req.body);
  
      const {email,password} = req.body;
      if (!email || !password ) {
          console.log("not all fields...");
          return res.status(400).json({
            status: 400,
            message: "Please fill all fields",
          });
      }
      const check=await Newuser.findOne({email:email})
      const check2=await Newuser.findOne({password:password})
const token= jwt.sign({},JWT_SECRET);
  
       if(check&&check2){
        console.log(check);
          res.json({status:"exist",data:check});
       }
else{
  
  
          const newuser = await login.create({
              email,
              password,
            });
          
      
  return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: newuser,
    });
  
  } 
}catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
  
  };