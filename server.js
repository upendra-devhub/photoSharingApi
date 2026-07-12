require('dotenv').config();
const express=require('express');
const app=express();

const connectDB = require('./src/config/db');
const postRoutes=require('./src/routes/postRoutes');
const logger=require('./src/middlewares/logger')
const errorHandler=require('./src/middlewares/errorHandler')


app.use(express.json());
app.use(logger);

app.use('/api/posts',postRoutes)
app.use(errorHandler)

// app.get("/",(req,res)=>{
//     res.send("Welcome to Photo Sharing API")
// })

//MVC->Model view and controller
//controller->The main logic of the code
// view-> Display to the user
// Model->any logic related to managing or talking to the database


//We are going to use ODM
//Object Document Mapper
// we can talk to our db without odm too 
// one of the way to do so is to use MONGODB dependency
// but we prefer Mongoose(that is a ODM) 
// cuz we dont need to emember any kind of queries from mongoDB we just be creating a js object and we map it to our colledction

connectDB();

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})