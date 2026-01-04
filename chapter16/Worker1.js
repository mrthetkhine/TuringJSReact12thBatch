const { parentPort, workerData } = require('node:worker_threads');
console.log('Worker1.js loaded');
//console.log('Worker Data:', workerData);
//console.log('Parent Port:', parentPort);

parentPort.on('message', (msg) => {
    console.log('Message from Main Thread:', msg);
    parentPort.postMessage('Hello from Worker1.js');
});
