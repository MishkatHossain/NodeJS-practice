const fs = require('fs')



//reading 
fs.readFile('./learn/blog.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString());
});


console.log("Last line")

//writing


let x = "This is so dark"

fs.writeFile('./learn/blog34.txt', 'Hello, world', ()=>{
    console.log('File was written')
});

directories
if(!fs.existsSync('./assets')){
    
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
}
else {
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })


}

//delete files

    fs.unlink('./learn/blog33.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted')
    })
