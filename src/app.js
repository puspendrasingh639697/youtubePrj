import exprees from exprees;
import cookieParser from "cookie-parser";
import cors from "cors";

const app = exprees()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,

}))
app.use(exprees.json({limit:"20kb"}))
app.use(exprees.urlencoded({extended:true}))
app.use(exprees.static('Publilc'))
app.use(cookieParser())
/// //////  UserRouter import  ///////////////////////
import userRouter  from  './routes/user.route.js'

//Router  Decriletion//////////////////////////
app.use("/api/v1/users",userRouter)

// localhost/3000/api/v1/users/ragister/ ksjadhk


/////////////////////////////////////////////// 


export {app}