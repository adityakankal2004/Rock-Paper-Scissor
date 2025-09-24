const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs", ejsMate);
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));




app.get("/",(req,res)=>{
    res.send("index.html");
});


app.get("/login",(req,res)=>{
    res.render("users/login");
})

app.get("/signup",(req,res)=>{
    res.render("users/signup");
});


app.listen(3000,()=>{
    console.log("Server Started");
});