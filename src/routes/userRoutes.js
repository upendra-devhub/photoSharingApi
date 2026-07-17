const express=require('express');
const router=express.Router();
const {registerUser,loginUser}=require('../controllers/userController');

// /api/users/register
router.post('/register',registerUser);

// /api/users/login
router.post('/login',loginUser);

module.exports=router;