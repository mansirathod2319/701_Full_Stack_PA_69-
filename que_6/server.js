var fs=require("fs");
var zlib=require("zlib");

fs.createReadStream('./zipFolder/zipFile.zip')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./zipFolder/zipFile.txt','utf-8'));

console.log("File Decompressed!!");    