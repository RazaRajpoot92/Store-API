import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be provided"]
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["ikea",'liddy','caressa','marcos'],
            message:'{VALUE} is not supported'
        }
    }
})

export const Product = mongoose.model("Product",productSchema)