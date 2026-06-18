import mongoose from "mongoose"

// Database connection
let connedDB =  async()=>{
    try {
     await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.log("Database Error - ",error);      
    }
}

export default connedDB