const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

//enviromental variables or constants

env.config();

app.use(bodyParser());

//mongo db connections
//mongodb+srv://admin:<password>@cluster0.drdjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.drdjd.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=> {
        console.log('Database connected')
    });

app.use('/api',userRoutes);    

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});