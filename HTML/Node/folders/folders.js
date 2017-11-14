const fs = require('fs')

// for(var i=1; i<=100; i++){
//     fs.mkdir(`folder-${i}`)
// }

// for(var i=1; i<=100; i++){
//     fs.rename(`folder-${i}`, `new-folder-${i}`)
// }

for(var i=1; i<=100; i++){
    fs.rmdir(`new-folder-${i}`)
}