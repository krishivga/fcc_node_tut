// Example for event loops using setTimeout()

console.log("first")
setTimeout(() =>  {
    console.log("second") // Callback happens at the end
}, 0)
console.log("third")
// completed and exiting system process