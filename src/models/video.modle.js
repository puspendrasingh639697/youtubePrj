import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videosSchema = new mongoose.Schema({
    videofile:{
        type:String, /// coundnery is Url...
        required:true,

    },
     thumbnail:{
        type:String,
        required:true,
        
    },

      title:{
        type:String,
        required:true,
        
    },

        description:{
        type:String,
        required:true,
        
    },

      duration:{
        type:String,
        required:true,
        
    },
      views:{
        type:Number,
        default:0,
        
    },

     isPublished:{
        type:Boolean,
       default:false,
        
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

videosSchema.plugin(mongooseAggregatePaginate)




export  const  Video  =  mongoose.model(" Video",videosSchema)