const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// get serialized url 
console.log(myUrl.href);

// get host (root domain) (with port address if included)
console.log(myUrl.host);

// get host name
console.log(myUrl.hostname);

// get path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params and print details
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
