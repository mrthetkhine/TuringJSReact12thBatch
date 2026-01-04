const net = require('node:net');
const fs = require('node:fs');
const fsPromises = fs.promises;
const server = net.createServer();

function writeResponse(socket,url) {

    let body;
    if(url.endsWith('.html')) {
        let filePath = `./Root${url}`;
        console.log('url ',url);
        console.log('filePath ',filePath);

        if(fs.existsSync(filePath)) {
            fsPromises.readFile(filePath, 'utf8')
                .then(data=>{
                    body = data.toString();
                    writeResponseBody(body, socket);
                });
        }
        else{
            body = `<html>
                <h1>Not found</h1>
                </html>`;
                let response = 'HTTP/1.0 400 NotFound\r\n'
                    + 'Content-Type: text/html\r\n'
                    + 'Connection: Closed\r\n\r\n'
                    + body;
                socket.write(response);
                socket.end();
        }
    }
    else
    {
        body = `<html>
                <h1>Hello from Custom HTTP Server</h1>
                </html>`;
                writeResponseBody(body, socket);
                
    }
    

}
server.on('connection',socket=>{
    console.log('Client connected');
    socket.on('data', (data) => {
        let request = data.toString();
        console.log(`Received from client: `);

        let lines = request.split('\r\n');
        let statusLine = lines[0];
        let statusParts = statusLine.split(' ');
        let method = statusParts[0];
        let url = statusParts[1];
        console.log(`Method: ${method}, URL: ${url}`);

        console.log(request);
        // Write data back to the client (echo)
        writeResponse(socket,url);
    });

    // End event: called when the client disconnects
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});
server.listen(9000, () => {
    console.log('Custom HTTP server listening on port 9000');
});

function writeResponseBody(body, socket) {
    let response = 'HTTP/1.0 200 OK\r\n'
        + 'Content-Type: text/html\r\n'
        + 'Connection: Closed\r\n\r\n'
        + body;
    socket.write(response);
    socket.end();;
    return body;
}
