import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePathUrl) => {
    try {
        if (!localFilePathUrl) return null;

        //upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePathUrl,{
            resource_type:'auto'
        })

        //file has been uploaded successfully 
        console.log("file is uploaded on cloudinary : ", response.url);
        return response;
    } catch (error) {
        //unlinkSync use for when file unlink the after work will done
        fs.unlinkSync(localFilePathUrl) //remonve the local temperory file as the cloudinary
        return null
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });