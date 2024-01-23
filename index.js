const express = require('express');
const db = require('./config/db');
const path = require('path');

const port = 8000;





const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use('/public',express.static(path.join(__dirname, 'public')))
app.use('/',require('./routes/newsroutes'));

app.listen(port, (err)=>{
    if(err){
        console.log(`Server is not connected`);
        return false;
    }
    console.log(`Server is connected on:${port}`);
})