const User=require('../models/user');
const generateToken=require('../utils/generateToken')


//Register

const registerUser=async (req,res,next)=>{
    try{
        const {username,email,password}=req.body;

        const userExists=await User.findOne({email});
        if(userExists){
            res.status(400);
            throw new Error('User with this email already exists');
        }

        const user=await User.create({
            username,
            email,
            password
        });
        if(user){
            res.status(201).json({
                _id:user.id,
                username:user.username,
                email:user.email,
                message:"User registered successfully"
            })
        }

    }catch(err){
        next(err);
    }
}

//Login

const loginUser=async (req,res,next)=>{
    try{
        const {email, password}=req.body;

        const user=await User.findOne({email});

        //User should exist and password should match
        if(user && user.matchPassword(password)){
            res.json({
                _id:user.id,
                username:user.username,
                email:user.email,
                token:generateToken(user._id),
                message:"Login successfully"
            });
        }else{
            res.status(401);
            throw new Error("Invalid email or password");
        }

    }catch(err){
        next(err);
    }
}


module.exports={
    registerUser,loginUser
}