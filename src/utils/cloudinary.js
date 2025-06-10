import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
    
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.COUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const updordOnCloudinary = async (localFilePath) =>{
        try {
            if(!localFilePath) return null
            //upload tha file on cloudinary 
             const response =  await cloudinary.uploader.upload(localFilePath,{
                resource_type:'auto'
            })
            //file has been upload to successfully....
            
        } catch (err) {
            fs.unlinkSync(localFilePath)
            console.log("Your file path Wrong",err)
            
        }
    }


    export {updordOnCloudinary}