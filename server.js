var static = require('node-static');
var file = new static.Server('./dist');
const port = parseInt(process.env.PORT, 10) || 8080
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port, (err) => {
  if (err) throw err
  console.log(`Ready on http://localhost:${port} [${process.env.NODE_ENV}]`);  
});
