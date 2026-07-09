const express=require('express');
const app=express();

const postRoutes=require('./src/routes/postRoutes');
app.use(express.json());
app.use('/api/posts',postRoutes)


// app.get("/",(req,res)=>{
//     res.send("Welcome to Photo Sharing API")
// })

//MVC->Model view and controller
//controller->The main logic of the code
// view-> Display to the user
// Model->any logic related to managing or talking to the database

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})