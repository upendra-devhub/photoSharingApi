// Error handling middleware has access to 4 things 
// err,req,res,next

const errorHandler = (err, req, res, next) => {
    console.log('Error detected');
    console.log(err.message)

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: err.message || "Request Failed"
    });
}

module.exports=errorHandler