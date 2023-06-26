const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const app=express();
const PORT =3500;
 
app.use(cors());
app.use(express.json())
 //connect to mongodb database 
 mongoose.connect('mongodb://localhost/jobDB')
 const db =mongoose.connection;
 db.on("error",(err)=>{
    console.log(err)
 })
 
 db.once("open",()=>{
     console.log("connected to db successfully")
 })
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
 })