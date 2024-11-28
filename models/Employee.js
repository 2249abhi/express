const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required."]
    },
    email:{
        type:String,
        unique: true,
        required:[true, "Email is required."]
    },
    phone:{
        type:String,
        unique: true,
        required:[true, "Phone is required."]
    },
    dsg:{
        type:String,
        required:[true, "Designation is required."]
    },
    salary:{
        type:Number,
        required:[true, "Salary field is required."]
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default: ""
    }
})

const Employee = new mongoose.model("Employee",EmployeeSchema)

module.exports = Employee