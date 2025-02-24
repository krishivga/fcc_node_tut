const {readFile, writeFile, write} = require('fs'); // accessing methods directly

readFile("./content/first.txt",'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const firstFile = result;
    readFile("./content/second.txt",'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const secondFile = result;
        writeFile('./content/fs-async.txt',
            `Here is the result: ${firstFile}, ${secondFile}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})

