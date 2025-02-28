const http = require('http')

const server = http.createServer((request, response) => {
    console.log('request sent')
    response.end("Hello World!")
})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})