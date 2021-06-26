var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var friends=["Pankhuri","Prakhar","Shivansh","Alok","Arihant","Himanshu"];
app.listen(2200,process.env.IP,function(req,res){
    console.log("HI SERVER!!");
});
app.get("/",function(req,res){
    res.render("home");
});
app.get("/friends",function(req,res){
   
    res.render("friends",{frnd:friends});
});
app.post("/addfriends",function(req,res){
  var newfrnd=req.body.newfrnd;
  friends.push(newfrnd);
    res.redirect("/friends");
});