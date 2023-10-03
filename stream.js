const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog7.txt');




readStream.on('data', (pack)=>{
    console.log("----------The new pack---------")
    console.log(pack)

    writeStream.write('\nwriting New Chunk\n')
    writeStream.write(pack)

    




})





