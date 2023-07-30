const fs = require("fs")

const removeFile = (myFile) => {
    return new Promise((resolve, reject) => {

        fs.unlink(myFile, (err) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve('file removed successfully.')
            }
        })
    })
}

removeFile('./files/text1.txt').then(msg => {
    console.log(msg)
}).catch(error => {
    console.log('error occured while deleting file ' + error)
})