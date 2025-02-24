const {readFileSync, writeFileSync} = require('fs'); // accessing methods directly

const firstFile = readFileSync('./content/first.txt', 'utf8')
const secondFile = readFileSync('./content/second.txt', 'utf8')

console.log(firstFile, secondFile)

writeFileSync(
    "./content/subfolder/fs-sync.txt",
    `Here is the result: ${firstFile}, ${secondFile}`
)
