var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./zipFolder/zipFile.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./zipFolder/zipFile.zip'));

console.log("File compreseed!!");