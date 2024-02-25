import mongoose, {Schema, Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
-mongooseAggregatePaginate
const videoSchema = new Schema({
   videoFile: {
    type: String,  //cloudinary video link
    required: true
   },
   thumbnail: {
    type: String,
    required: true
   },
   title: {
    type: String,
    required: true
   },
   description: {
    type: String,
    required: true
   },
   thumbnail: {
    type: String,
    required: true
   },
   duration: {
    type: Number,
    required: true
   },
   view: {
    type: Number,
    default: 0
   },
   isPublished: {
    type: Boolean,
    default: true
   },
   owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
   }

},{timestamps: true})


videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema) 
