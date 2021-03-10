var express = require('express');
var path = require('path');
var cors=require('cors');
var cookieParser=require('cookie-parser');
var bodyParser=require("body-parser");

var users=require('../routes/users');
var address=require('../routes/address');
var articles=require('../routes/articles');
var challans=require('../routes/challans');
var clients=require('../routes/clients');
var location=require('../routes/location');
var fs=express();

var app=express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));

app.use('/home',users);
app.use('/home',address);
app.use('/home',articles);
app.use('/home',address);
app.use('/home',challans);
app.use('/home',clients);
app.use('/home',location);

module.exports = app;
