const express=require('express');
let bodyParser = require('body-parser');

const app=express();

const User=require('./app/routes/userRoutes');
const Admin=require('./app/routes/adminRoutes');

const mongoose=require('./app/utils/db')
var cors = require('cors')
app.use(cors({origin : 'http://localhost:4200'}));
app.use(express.json({extended:false}))
const port =7000;
app.listen(port,()=>console.log('server is running in port',port));
app.use('/user',User);
app.use('/admin',Admin);