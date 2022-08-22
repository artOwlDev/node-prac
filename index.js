
// const Person = require('./person');

// const person1 = new Person('artun', 30);

// console.log(person1.greeting());


const http = require('http');
const path = require('path');
const fs = require('fs');

//without nodemon, whenever we change the content of the server we have to manually restart the server, this is where nodemon comes into play. It's extremely useful in automizing everything
const server = http.createServer((req, res) => {
    if (req.url === '/') {

        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>H</h1>');

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })

    }

    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }

    //write in json, create rest APIs
    else if (req.url === '/api/users') {
        const users = [
            { name: "Bob Smith", age: 30 },
            { name: "John Doe", age: 40 }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));

    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




