
//The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path');


// get base file name
console.log(path.basename(__filename));

//get base directory name
console.log(path.basename(__dirname));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));



