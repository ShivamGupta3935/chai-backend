import { asyncHandler } from "../utils/asyncHandler.js";
import router from "../routes/user.routes.js";

const registerUser = asyncHandler(async (res, res) => {
    res.status(200).json({
        message: "OK"
    })

    //for registering we follow this step
    //get user detail from frontend
    //validation - not empty
    //check if user already exist using username , email
    //check for required field , like image and avatar
    //upload them to cloudinary
    //creat user object - creat user in db
    //remove password and refresh token field from response
    //check the user creation
    //return res

    // const {name, email, fullname, password} = req.body
    // console.log(email);
})

export {registerUser};