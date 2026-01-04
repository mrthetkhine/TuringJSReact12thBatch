const threads = require('node:worker_threads');
if(threads.isMainThread) {
    console.log('Main Thread');
    const worker = new threads.Worker('./Worker1.js');
    worker.postMessage('Hello form Main thread to Worker');

    worker.on('message', (msg) => {
        console.log('Message from Worker:', msg);
    });
}
else
{
    console.log('Worker Thread');
}