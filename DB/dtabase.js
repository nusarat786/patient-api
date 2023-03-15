const mongoose = require("mongoose");


// connecting database
const connectDatabase = ()=>{
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log("Mongo Db Is Connected")
    })
    .catch((err)=>{
        console.log("error is:")
        console.log(err)
    })
}

module.exports = connectDatabase;