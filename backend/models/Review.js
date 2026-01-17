const mongoose = require('mongoose')
const { Schema } = mongoose;
const reviewSchema = new Schema({
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Movies",
        required:true
    },

    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    }
})
const Review = mongoose.model('Review', reviewSchema);
module.exports= Review;