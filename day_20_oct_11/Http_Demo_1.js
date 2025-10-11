const http = require('http');

const server = http.createServer((req, res) => {
    // req : request Object to read request details coming from client
    // res : response object to send response to client
    res.statusCode = 201;
    res.setHeader('Content-Type','text/plain')
    res.write('User Created!!!');
    res.end();
});

server.listen(3000, () => {
    console.log(`Server Running at port 3000`)
})

