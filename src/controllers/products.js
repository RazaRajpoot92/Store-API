

const getAllProducts = (req,res)=>{
    
    res.status(200).json({"msg":"All products"})
}

const getAllStaticProducts = (req,res)=>{
    throw new Error("testing async errors")
    res.status(200).json({"msg":"All Static Products"})
}

export {
    getAllProducts,
    getAllStaticProducts,
}