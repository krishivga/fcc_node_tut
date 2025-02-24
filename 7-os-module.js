const os = require('os')

//info about current user
const user = os.userInfo()

console.log(user);

//module returns system uptime in seconds
console.log(`The system uptime isn ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS);