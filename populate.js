import { configDotenv } from "dotenv";
import { connectDB } from "./src/db/connectDB.js";
import { Product } from "./src/models/product.js";

import { productData } from "./product.js";

configDotenv()


const start = async()=>{
   try{
        await connectDB(process.env.MONGO_URI)      
        console.log("Success")
        await Product.deleteMany()
        await Product.create(productData)
    }catch(error){
        console.log(error)
    }
}

start()