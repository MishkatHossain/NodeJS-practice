const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express();

//connect to mongoDB

const databaseURI = 'mongodb+srv://netninja:qwerty123@nodetuts.mgzrcfl.mongodb.net/note-tuts?retryWrites=true&w=majority'

mongoose.connect(databaseURI, { useNewUrlParser:true, useUnifiedTopology: true})
.then((conn)=>app.listen(3000))
.catch((err)=>{ console.log(err)});
    


app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


//routes
app.get('/', (req, res)=>{
    res.redirect('/blogs')
});


app.get('/about', (req, res)=>{
    res.render('about', { title: 'About'})
});


//blog routes
app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err)=>{
        console.log(err);
    })
});


app.post('/blogs', (req,res)=>{

    const blog = new Blog(req.body)

    blog.save()
     .then((result) => {
       res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/blogs/:id', (req, res)=>{
    const id =req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result)=>{
        render('details', {blog: result, title: 'Blog Details'});

    })
    .catch(err=>{
        console.log(err);
    })
})



app.get('/blogs/create', (req, res)=>{
    res.render('create',{ title: 'Create a new blog'});
})

app.use((req, res)=>{
    res.status(404).render('404', { title: '404'});
})