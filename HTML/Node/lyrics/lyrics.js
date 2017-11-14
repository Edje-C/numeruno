const fs = require('fs')

fs.readFile('lyrics-1.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }

    fs.writeFile('lyrics-3.txt', data+'\n', (err, data) => {
        if (err) {
            throw err
        }
    })
})


fs.readFile('lyrics-2.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }

    fs.appendFile('lyrics-3.txt', data, (err, data) => {
        if (err) {
            throw err
        }
    })
})

