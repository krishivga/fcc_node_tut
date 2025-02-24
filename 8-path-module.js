const path = require('path')

console.log(path.sep);

const filePath = path.join("/pathExample/", "innerFolder", "test.txt")
console.log(filePath);
 
const baseName = path.basename(filePath)
console.log(baseName);

const absolute = path.resolve(__dirname)
console.log(absolute);