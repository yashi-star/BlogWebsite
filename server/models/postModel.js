const {Schema, model} = require("mongoose")
// const { createRoot } = require("react-dom/client")

const postSchema = new Schema({
    title: {type:String, required:true},
    category: {type: String, enum: ["Agriculture", "Business","Education", "Entertainment" , "Art", "Investment","Uncategorized","Weather"],message: "{VALUE IS NOT SUPPORTED"},
    description: {type: String, required:true},
    creator: {type:Schema.Types.ObjectId,ref:"User"},
    thumbnail:{type:String,required:true},
},{timestamps:true});


module.exports=model("Post",postSchema);