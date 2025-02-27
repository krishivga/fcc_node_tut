// npm - global command for everything npm
// npm --version - shows the version

// local dependency - stuff you only wanna use this project
// npm install packagename OR npm i package - installs a package

// global dependency - can be used in any project
// npm install -g packagename - installs a package globally
// sudo npm install -g packagename - installs globally for macos

// package.json - the manifest file (contains all important info about your package)
// npm init - step by step package initialisation
// npm init -y - everything default

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)