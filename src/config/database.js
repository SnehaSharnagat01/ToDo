import mongoose from "mongoose"

let connedDB =  async()=>{
    try {
     await mongoose.connect("mongodb://localhost:27017/Todo-Backend")
        console.log('Database connected successfully')
    } catch (error) {
        console.log("Database Error - ",error);      
    }
}

export default connedDB