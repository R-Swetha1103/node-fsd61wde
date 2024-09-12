
const http = require('http');


const server = http.createServer((request, response) => {
 const { url, method } = request;

 if (url === '/') {
  if(method === 'GET') {
    return response.end('GET World');
  } else if (method === 'POST') {
    return response.end('POST World');
  }
  
 } else if(url === '/test') {
  return response.end('Hello World');
 } else {
  return response.end('Endpoint not found');
 }
});


server.listen(3001, 'localhost', () => {
  console.log('Server is running on http://localhost:3001');
});

