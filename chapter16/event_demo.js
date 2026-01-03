const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

console.log('Starting event demo');
setTimeout(() => {
    console.log('Emitting event1');
    eventEmitter.emit('taskDone');
}, 3000);

eventEmitter.on('taskDone', () => {
    console.log('taskDone event received, executing callback');
});
console.log('end');