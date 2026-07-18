const Post=require('../models/post')


const getPosts=async (req,res,next)=>{
    try{
       const posts= await Post.find();
       res.json(posts); 
    }catch(err){
        next(err);
    }
}

const getPostById=async (req,res,next)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post){
            res.status(404);
            throw new Error("No such post  available in DB")
        }
        res.json(post);
    }catch(err){
        next(err)
    }
}

// Create Post

const createPost=async (req,res,next)=>{
    try{
        if(!req.file){
            res.status(400);
            throw new Error('Please upload an image')
        }
        console.log("UPLOADED FILE:", req.file);
        const url=req.file.path || req.file.url;

        const post = await Post.create({
            caption:req.body.caption,
            imageURL:url
        });
        res.status(201).json(post);
    }catch(err){
        next(err);
    }
}

//Update aPost
const updatePost=async (req,res,next)=>{
try{
let post=await Post.findById(req.params.id);
if(!post){
res.status(404);
throw new Error("Post not found");
}

const updateData={caption:req.body.caption}
if (req.file) {
    updateData.imageURL = req.file.path || req.file.url;
}

const updatedPost=await Post.findByIdAndUpdate(req.params.id,updateData,{
new:true
});

res.json(updatedPost);

}catch(err){
next(err);
}
}
// Delete a post

const deletePost=async (req,res,next)=>{
    try{
       const deletedPost=await Post.findByIdAndDelete(req.params.id);
       res.json({message:"Post deleted succesfully"})
    }catch(err){
        next(err);
    }
}


module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}