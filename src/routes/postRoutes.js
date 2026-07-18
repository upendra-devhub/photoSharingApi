const express=require('express');
const router=express.Router();
const {auth}=require('../middlewares/authMiddleware')
const upload=require('../config/uploadConfig')

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
    .post(auth,upload.single('image'),createPost)

router.route('/:id')
    .get(getPostById)
    .put(auth,upload.single('image'),updatePost)
    .patch(auth,upload.single('image'),updatePost)
    .delete(auth,deletePost)

module.exports=router;