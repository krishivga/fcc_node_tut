const http = require('http');

const server = http.createServer((request, response) => {
    response.write("Welcome to my humble server");
    response.end();
})

server.listen(3000)