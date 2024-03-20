const mongoose =require('mongoose');

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name of the tour is mandatory"],
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    description:String,
    createdAt:{
        type:Date,
        default:new Date()
    },
    updatedAt:{
        type:Date,
       default: new Date()
    },
    duration:{
        type:Number,

    },
    difficulty:{
        type:String,
        default:"medium"
    }

});

const Tour=mongoose.model("Tour",tourSchema)

module.exports=Tour;
