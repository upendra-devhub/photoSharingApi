const cloudinary=require('cloudinary');
const multer=require('multer');
const CloudinaryStorage=require('multer-storage-cloudinary');


cloudinary.v2.config({
cloud_name:process.env.CLOUD_NAME,
api_key:process.env.CLOUD_API_KEY,
api_secret:process.env.CLOUD_API_SECRET
});

//To tell the multer to send the incoming file to the cloudinary

const storage=CloudinaryStorage({
cloudinary:cloudinary,
folder:'PhotoSharing_API',
allowedFormats:['jpg','png','jpeg']
})

const upload=multer({storage:storage});

module.exports=upload;