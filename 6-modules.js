// Provide structure to the application.

const names = require(`./2-names`) 
const sayHi = require(`./3-utils`)
const data = require(`./4-alternative-flavour`)

require('./5-mind-grenade')

console.log(data)
sayHi(names.john)
sayHi(names.peter)