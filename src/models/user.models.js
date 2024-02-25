import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,  //cloudinary link avatar
    required: true,
  },
  coverImage: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  watchHistory: [
    {
        type: Schema.Types.ObjectId,
        ref: "Video"
    }
  ],
  refreshToken: {
    type: String
  }

},{timestamps: true})

//password bcrypt using bcrypt algrothim
userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next();
  this.password = bcrypt.hash("password", 8);
  next();
})

//costom method 
// to check correct password or not using bcrypt
userSchema.methods.isPasswordCorrect =async function(password){
    // it return a boolean value
    return await bcrypt.compare("password", this.password)
}

//MAKE COSTOM METHOD IN JWT TOKEN
userSchema.methods.generateAccessToken = function(){
  jwt.sign(
    //payload
    {
      _id : this._id,
      email : this.email,
      username : this.username,
      fullname : this.fullname
    },
    //passing private key
    process.env.ACCESS_TOKEN_SECRET,
    //passing expiry time
    {
     expiresIn :  process.env.ACCESS_TOKEN_EXPIRY
    }
  )
} 

userSchema.methods.generateRefreshToken = function(){
  jwt.sign(
    //payload
    {
      _id : this._id,
    },
    //passing private key
    process.env.REFRESH_TOKEN_ACCESS,
    //passing expiry time
    {
     expiresIn :  process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}
export const User = mongoose.model("User", userSchema);
