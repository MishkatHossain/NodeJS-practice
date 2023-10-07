const express = require('express');


const app = express();

// register view engine 

app.set('view engine', 'ejs');


app.listen(3000);


app.get('/', (req, res)=>{
    // res.send('<p> home page of the sharingan</p>');

    res.render('index')
});

app.get('/about', (req, res)=>{
    // res.send('<p> Shark </p>');

    res.render('about')
});


app.get('/about-us', (req, res)=>{
    res.redirect('./about');
})

app.get('/abouts', (req, res)=>{
    res.redirect('./about');
})


app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})