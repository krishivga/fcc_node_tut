const { readFile } = require('fs')

console.log('started first task');

// Check for file path

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log("starting next task")