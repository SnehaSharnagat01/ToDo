import dotenv from 'dotenv'
dotenv.config()
import app from "./src/app.js";
import connedDB from './src/config/database.js';
await connedDB()

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port - ",port);   
});
