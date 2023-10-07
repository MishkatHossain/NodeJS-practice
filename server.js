const http = require('http')
const fs = require('fs');
const _ = require('lodash')



const server = http.createServer((req, res)=>{
    
    const num = _.random(0, 20);


    // const greet = _.once(() =>{
    //     console.log('hellow world of zealot')
    // })

    const greet = _.once(()=>{
        console.log("This is so Dark to handle");
    })
    greet();
    greet();
        



    res.setHeader('Content-Type', 'Text/html')    
    
    let path = './views/';

    switch(req.url) 
    {    
        case '/': 
            path +='index.html'; 
            res.statusCode = 200;
            break;
        case '/index': 
            path +='index.html'; 
            res.statusCode = 200;
            break;
        case '/about': 
            path +='about.html'; 
            res.statusCode = 200;
            break;
        case '/about-u':  
            res.statusCode = 301;
            res.setHeader('location','/about')
            break;
        
        default : 
            path +='404.html';
            res.statusCode = 404; 
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err)
            console.log(err);
        else
        {
            res.write(data);
        }
            
        res.end()
    })



})




server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
});


