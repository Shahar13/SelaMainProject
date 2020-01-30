
var http = require('http');

http.createServer( (req, res) => {
    var response = "Hoi Hamburg!";

    res.writeHead(200, {
        'contentType': 'tex/plain',
        'Content-Length': response.length
    });

    res.write(response);
    res.end;
}).listen(3001);