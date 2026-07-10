const logger=(req,res,next)=>{
    const time=new Date().toLocaleDateString();

    const method=req.method;
    const url=req.url;

    console.log(`${time} Reciuieved a ${method} request to ${url}`)
    next();
}
module.exports=logger