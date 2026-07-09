

let dummyPosts=[
    {
        id:1,
        caption:'My first photo'
    },
    {
        id:2,
        caption:'A great sunset'
    }
]

const getPosts=(req,res)=>{
    res.json(dummyPosts)
}

const getPostById=(req,res)=>{
    const id=req.params.id;
    const post=dummyPosts.find(p=>p.id===Number(id));

    if(!post){
        return res.status(404).json({message:"page not found"})
    }
    res.json(post);
}

// Create Post

const createPost=(req,res)=>{
    const newPost={
        id:dummyPosts.length+1,
        caption:req.body.caption
    }

    dummyPosts.push(newPost);
    res.status(201).json(newPost)
}

const updatePost=(req,res)=>{
    const postIndex=dummyPosts.findIndex(p=>p.id===Number(req.params.id));
    dummyPosts[postIndex].caption=req.body.caption;

    res.json(dummyPosts[postIndex])
}

// Delete a post

const deletePost=(req,res)=>{
    const postIndex=dummyPosts.findIndex(p=>p.id===Number(req.params.id));

    dummyPosts.splice(postIndex,1);
    res.json({
        message:'Post deleted successfully'
    })
}


module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}