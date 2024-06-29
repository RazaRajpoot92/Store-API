export const errorHandler = async (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({msg:"Soemthing went wrong, please try again later"})
}