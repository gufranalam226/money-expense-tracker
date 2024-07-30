const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const exp = require("constants")

const app = express()
app.use(express.static("public"))  

mongoose.connect("mongodb://localhost:27017/expendetrackdb")
.then(console.log("DB connected"))
.catch((err)=>{
    console.log(err)
})


const mtSchema = new mongoose.Schema({
    expTitle : String,
    date : String, 
    amount : Number
})

const MtModel = new mongoose.model("MoneyTrackers", mtSchema);

 

app.get("/",async (req, res)=>{
    try{
        res.sendFile(path.join(__dirname , "/../public/index.html"))
        
    }
    catch(err){
        console.log(err)
    }
})


app.get("/home", async (req, res)=>{
    try{

        const {expTitle, date, amount} = req.query;
        console.log(expTitle, date , amount)
        await MtModel.create({
            expTitle,
            date,
            amount
        })
        res.redirect("/")
    }
    catch(err){
        console.log(err)
    }
} )



app.listen(3000, ()=>{
    console.log("server is running on 3000 port")
})

module.exports = { 
    MtModel
} 