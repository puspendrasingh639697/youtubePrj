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


export {app}