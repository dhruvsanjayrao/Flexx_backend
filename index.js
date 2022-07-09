//Imports from packages
const express = require('express');
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')

//Init
const PORT = process.env.PORT || 3000;
const app = express();
const DB = 'mongodb+srv://dhruv:kiran123@cluster0.lfjto74.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(() => {
    console.log('Connection Successful')
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log('Connected')
});