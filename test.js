const express=require("express")
const app=express()

app.get("/", function(req,res){
    res.send("test")
})

app.listen(process.env.PORT, function(){
    console.log('Bienvenue !');
})
