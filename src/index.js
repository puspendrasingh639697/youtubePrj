import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
import  app  from "./app.js";
dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("sueccessfully Conented")
    })
})
.catch((err)=>{
    console.log("Filed to Mongosh Error",err)
})
















































































































































// import mongoose from "mongoose";
// import { MONGO_DB_URL } from "./constants";
// import  exprees from  exprees;
// const aap = exprees()



// (async ()=>{

// try {
//     await  mongoose.connect(`${process.env.MONGO_URI}/${MONGO_DB_URL}`)
//     app.on("error")
// } catch (error) {
//     console.log("this code Error".error)
    
// }

// })()