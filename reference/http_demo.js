const http = require('http');

//create server object
http.createServer((req, res) => {
    //write response
    res.write('Hello worldddddd!');
    res.end();



}).listen(4000, () => console.log('server is running!'));

