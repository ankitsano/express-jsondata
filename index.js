// const fs =require('fs');
// const express=require('express');
// const app=express();

// app.get('/student/getDetails',function(req,res){
// fs.readFile('user.json','utf8',function(err,data){
//     console.log(data);
//     res.send(data);
// })

// })

// app.listen(8000,function(){
//     console.log("api working");
// })


const fs =require('fs');
const express=require('express');
const app=express();

app.get('/student/studentlist',function(req,res){
fs.readFile('student.json','utf8',function(err,data){
    console.log(data);
    res.send(data);
})

})

app.listen(8000,function(){
    console.log("api working");
})