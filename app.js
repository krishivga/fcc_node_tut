const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.end("This is the homepage.")
    }
    if(request.url === '/about'){
        response.end("This is the about page.")
    }
    response.end("Error Page")
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})