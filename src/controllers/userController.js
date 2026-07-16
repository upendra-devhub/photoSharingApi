const User=require('../models/user');

//register

const registerUser=async (req,res,next)=>{
    try{
        const {username,email,password}=req.body;

        const userExists=await User.findOne({email});

        if(userExists){
            res.status(400);
            throw new Error('user with this email already exists');
        }

        const user = await User.create({
            username,
            email,
            password
        });

        if(user) {
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                message: 'Registration Successful'
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    }catch(err){
        next(err);
    }
}

//login

const loginUser=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user.id,
                username:user.username,
                email:user.email,
                message:'Login Succesfull'
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    }catch(err){
        next(err);
    }
}

module.exports = {
    registerUser,
    loginUser
};