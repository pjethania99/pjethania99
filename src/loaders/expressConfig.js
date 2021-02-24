var express=require('express');
var path=require('path');

var bodyParer=require("body-parser");
var homerouter=require('../routes/home');
var newpersonalprofile=require('../routes/personalprofile');
var aboutme=require('../routes/AboutMe');
var contactinfo=require('../routes/ContactInfo');
var fs=express();
var app=express();


app.use(bodyParer.urlencoded({extended:true,limit:"50mb"}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/home',contactinfo); //we need to define this after the parser activity
app.use('/home',aboutme);
app.use('/home',homerouter);
app.use('/personal',newpersonalprofile);

module.exports=app;