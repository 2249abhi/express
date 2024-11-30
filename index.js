const express = require("express")
const path = require("path")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const { model } = require("mongoose")

const Employee = require("./models/Employee")
const { log } = require("console")

require("./db-connect")

const app = express()
const encoder = bodyParser.urlencoded()

app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"views/public")))
hbs.registerPartials(path.join(__dirname,"views/partials"))

app.get("",(req,res)=>{
    res.render("index");
})

app.post("/add",encoder, async (req,res)=>{
   // console.log(req.body);
    try {
        var data = new Employee(req.body)
        await data.save()
        res.redirect("/")
    } catch(error) {
        console.log(error);    
    }
})

app.post("/add", encoder, async (req, res) => {
    try {
        var data = new Employee(req.body)
        await data.save()
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
})

app.get("/add",(req,res)=>{
    res.render("add");
})

app.listen(8000,()=>{
    console.log("server is running at http://localhost:8000");
    
})