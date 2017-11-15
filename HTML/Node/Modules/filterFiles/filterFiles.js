filterFiles = (folder, ext, callback) => {
    const fs = require('fs')
    const path = require('path')

    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error();
            // callback(err)
            return;
        }

        files.forEach((file) => {
            if (path.extname(file) === ext) {
                console.log(file)
            }
        })
    })
}

module.exports = {
    filterFiles : filterFiles
}