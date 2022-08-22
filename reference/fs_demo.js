//FILE SYSTEM
const fs = require('fs');
const path = require('path');


//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created');
});


//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "This is the message I want to write!", err => {
    if (err) throw err;
    console.log('file written successful!');

    //add text to pre-exisitng .txt file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "\nAnd this is the next message I want to write", err => {
        if (err) throw err;
        console.log('file written successful!');
    })
})


// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

//rename file
//file previously named hello.txt has been changed to newhello.txt
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'newhello.txt'), (err) => {
    if (err) throw err;
    console.log('file rename successful!');
})





