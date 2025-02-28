const { error } = require('console');
const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => { 
        readFile('./content/first.txt', 'utf8', (error, data) => {
            if(error){
                reject(error);
            } else {
                resolve(data);
            }
})
    })
}

getText("./content/first.txt").then((result) => console.log(result)).catch((error) => console.log(error))