const express = require("express")
const path = require("path")

const app = express()
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"views/public")))
app.get("",(req,res)=>{
    res.render("index");
})

app.listen(8000,()=>{
    console.log("server is running at http://localhost:8000");
    
})