const express = require('express');
const app=express();
const PORT=5000;


app.get('/', (req,res)=>{
    res.send('API is Working, Welcome to Book Universe')
});

app.get('/add', (req,res)=>{
    res.send(2+2)
});


app.get('/name', (req,res)=>{
    res.send('Debasish')
});





app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT} 😁`);
})

