// importing mogoose
const mongoose = require("mongoose");


// patient Schema
const patientScheama = new mongoose.Schema({
    fname :{
        type:String,
        required :[true , "Please Enter Paitent First Name"]
    },
    lname :{
        type:String,
        required :[true , "Please Enter Paitent Last Name"]
    },
    age :{
        type:Number,
        required :[true , "Please Enter Paitent Age"],
    },
    gender :{
        type:String,
        required :[true , "Please Enter Paitent Gender"],
        default : "male"
    },
    docterRefId:{
        type:Number,
        required : [true , "Please Enter Docter Refrence Id "]
    }
})


module.exports = mongoose.model("Patients" , patientScheama)