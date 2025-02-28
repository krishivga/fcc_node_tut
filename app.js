const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.end("This is the homepage.")
    }
    if(request.url === '/about'){
        // Example of blocking code
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 10000; j++){
                console.log(`${i}, ${j}`)
            }
        }
        response.end("This is the about page.")
    }
    response.end("Error Page")
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})