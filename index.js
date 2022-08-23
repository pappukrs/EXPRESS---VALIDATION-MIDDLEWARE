
const express=require("express");



const app=express();
app.use(express.json())

app.post("/movies",(req,res,next)=>{

    let { ID, Name, Rating, Description, Genre, Cast}=req.body;
    console.log(typeof ID, typeof Name, typeof Rating, typeof Description, typeof Genre, typeof Cast);

    if(typeof(ID)!=="number" || typeof(Rating)!=="number" || typeof(Name)!=="string"|| typeof(Description)!=="string"|| typeof(Genre)!=="string" || typeof(Cast)!=="string"){
        res.status(400).send("bad request");
        return;
    }
    res.status(200).send("fine")
    next();
})



app.listen(5000,()=>{
    console.log("server is running on port 5000");
})