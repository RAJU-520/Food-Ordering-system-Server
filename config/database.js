import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://rajugorantla859:Gorantla520@cluster0.4tf39.mongodb.net/food-den').then(()=>console.log("DB Connected"));
}