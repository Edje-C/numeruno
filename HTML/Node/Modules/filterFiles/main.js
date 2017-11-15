filterFilesFn = require("./filterFiles.js")

folder = process.argv[2]
ext = process.argv[3]
callback = process.argv[4]

filterFilesFn.filterFiles(folder, ext, callback)