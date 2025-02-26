const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.end("Welcome to my humble server")
    } 
    if(request.url === "/about"){
        response.end("Here is what we are ABOUT!")
    }
    response.end(`
        <h1>Oops!</h1>
        <p>This page doesn't exist!</p>
        <a href="/">Go back home</a>
        `)

    // response.write("Welcome to my humble server");
    // response.end();
})

server.listen(3000)
