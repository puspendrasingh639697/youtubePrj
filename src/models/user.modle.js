import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema =  new mongoose.Schema(
    
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            unique :true,
            trim:true,
            index:true

        },
          gmail:{
            type:String,
            reqired:true,
            lowercase:true,
            unique :true,
            trim:true,
            index:true

        },
           fullName:{
            type:String,
            reqired:true,
            trim:true,
            index:true

        },
     avatar: {
    type: String,
    required: true   // Spelling fix किया गया
},

        coverImages:{
            type:String,
            required:true,
        
        },
        watchHistory:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
        ],
        password:{
            type:String,
            required:[true,"Password IS Reqired"]

        },
      refreshToken: {
    type: String,
}





},{timestamps:true});



userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
         this.password = await bcrypt.hash(this.password,10)
     next()

})

userSchema.methods.ispasswordCorrect =  async function
(password)
 {
    return await bcrypt.compare(password,this.password)
    
};

userSchema.methods.generateAccessToken = function(){
    return  jwt.sign({
        _id:this._id,
        name:this.name,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY ,
    }
)

},


userSchema.methods.generateRefreshToken = function(){
       return  jwt.sign({
        _id:this._id,
       
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY ,
    }
)
}


export const User  =  mongoose.model("User",userSchema)