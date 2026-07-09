const express=require('express');
const router=express.Router();

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
    .put(updatePost)
    .patch(updatePost)
    .delete(deletePost)

module.exports=router;