const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hi there!');
});


app.listen('9099',()=>{
    console.log('listening on port 9099');
})