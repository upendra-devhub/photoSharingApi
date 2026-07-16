const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
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
    }
)

//pre and post functions
// Pre functions are executed before the data is saved in your db
// post function are executed after the data is saved in your db

userSchema.pre('save',async function(next){

    if(!this.isModified('password')){
        return next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const User=mongoose.model('User',userSchema);

module.exports = User;