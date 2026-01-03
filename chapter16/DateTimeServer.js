const net = require('node:net');
const server = net.createServer((socket) => {
    console.log('Client connected');
    let now = new Date();
    socket.write(now+"\r\n");
    socket.end();
});
server.listen(9000, () => {
    console.log('DateTime server listening on port 9000');
});