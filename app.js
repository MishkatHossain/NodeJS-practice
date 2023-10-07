const express = require('express');
const morgan = require('morgan')

const app = express();


app.set('view engine', 'ejs');


app.listen(3000);

app.use(express.static('public'))
app.use(morgan('dev'))


// middleware and static files




app.get('/', (req, res)=>{

    const blogs = [
        {title: 'YashidaCorp', snippet: 'Just let me crushed in piece'},
        {title: 'One piece', snippet: 'This is One piece of naruto'},
        {title: 'Realm', snippet: 'Attack on Yajuj Majuj'},
        {title: 'Realm Once', snippet: 'Tom halal'},
    ];

    res.render('index', { title: 'Home', blogs})
});


app.get('/about', (req, res)=>{
    res.render('about', { title: 'About'})
});

app.get('/blogs/create', (req, res)=>{
    res.render('create',{ title: 'Create a new blog'});
})

app.use((req, res)=>{
    res.status(404).render('404', { title: '404'});
})