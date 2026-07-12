const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        // const conn=await mongoose.connect('mongodb+srv://upendrasinghsom1c_db_user:anshusom1c@cluster0.hlraeag.mongodb.net/?appName=Cluster0');

        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    }catch(err){
        console.log(`${err.message}`)
    }
}

module.exports = connectDB;