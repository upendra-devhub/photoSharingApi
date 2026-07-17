const express=require('express');
const router=express.Router();
const {auth}=require('../middlewares/authMiddleware')

const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}=require('../controllers/postController')

// posts whic dont have ID param
router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:id')
    .get(getPostById)
    .put(auth,updatePost)
    .patch(auth,updatePost)
    .delete(auth,deletePost)

module.exports=router;