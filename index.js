import { configDotenv } from "dotenv";
import express from "express"
import { notFound } from "./src/middlewares/notFound.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { connectDB } from "./src/db/connectDB.js";
import productRouter from "./src/routes/products.js"
import 'express-async-errors'


configDotenv()

const PORT = process.env.PORT || 3000

const app = express()


app.get("/",(req,res)=>{
    res.send("store api")
})

// products route
app.use("/api/v1/products",productRouter)


app.use(notFound)
app.use(errorHandler)


const start = async()=>{
    try {
        //connnect DB...

       await connectDB(process.env.MONGO_URI)
        console.log("Database connected!!")
        //App listen
        app.listen(PORT,()=>{
            console.log(`Server is running on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)        
    }
}


start()
