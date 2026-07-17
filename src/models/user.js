const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

//Pre and Post
//Pre functions are executed before the data is saved in your database
//Post function are executed after the data is saved in your database

userSchema.pre('save',async function(next){

    if(!this.isModified('password')){
        return next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
});


//Hashing is a one way process
// Password->Hash
// Hash-> cannot be converted back to password

// If user again tries to login how will I verify if he is using the correct password?

// Whatever password user enters we are going to generate hash of it and then compare that hash with the stored hash

userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


const User=mongoose.model('User',userSchema);

module.exports=User;