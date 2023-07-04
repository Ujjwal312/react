
 const NewUser = require("../models/Newuser");



exports.register= async (req, res) => {
    try{
    console.log("req body", req.body);

    const {fname,lname,email,password} = req.body;
    if (!fname || !lname || !email || !password ) {
        console.log("not all fields...");
        return res.status(400).json({
          status: 400,
          message: "Please fill all fields",
        });
    }
    const check=await NewUser.findOne({email:email})

    if(check){
        res.json("exist")
    }

else{
        const newuser = await NewUser.create({
            fname,
            lname,
            email,
            password,
          });
        
    
return res.status(200).json({
    status: 201,
    message: "User created successfully",
    data: newuser,
  });
}
} catch (error) {
  console.log("error", error);
  return res.status(500).json({
    status: 500,
    message: error.message,
  });
}
};


