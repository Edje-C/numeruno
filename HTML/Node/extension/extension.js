fs = require('fs')

path = process.argv[2]

ext = process.argv[3]

fs.readdir(path, (err, data) => {
    if(err){
         throw err
    }
    console.log(data.filter(v => v.includes("." + ext)))
})