const https = require('http');


const server = https.createServer((res, req) => {

console.log(req)
process.exit()

});

server.listen(3000);