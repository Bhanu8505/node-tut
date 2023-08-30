const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our Home Page');
    }
    if(req.url === '/about'){
        res.end('Here is our short story')
    }
    // res.write('Welcome to our Home Page');
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Back Home</a>
        `
    );
})

server.listen(5001);