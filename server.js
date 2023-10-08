const express = require('express')
const mongoose = require('mongoose')


const app = express();

const databaseURI = 'mongodb+srv://netninja:qwerty123@nodetuts.mgzrcfl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(databaseURI, {
    useNewUrlParser:true, 
    useUnifiedTopology: true

    }).then((conn)=>{
        console.log("Connect to DB"); }
    ).catch((err)=>{
        console.log("Some error in DB connection " + err)
    })









