const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/admin")
.then(()=>{
    console.log("database is connected");
    
})
.catch(error=>{
    console.log(error)
})