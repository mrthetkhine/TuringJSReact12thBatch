const mongoose = require('mongoose')
const { Schema } = mongoose;
const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    director: {
        type:{
            name: {
                type: String,
                required: true,
            },
            phoneNo:String,
        }
    },
    year:{
        type:Number,
    }
})
const Movie = mongoose.model('Movie', movieSchema);
module.exports= Movie;