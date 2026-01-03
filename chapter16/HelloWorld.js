const os = require('node:os');
console.log('Hello World in Node.js');
console.log('Process.argv ',process.argv);
let b = Buffer.from([0x41, 0x42, 0x43]);
console.log('Buffer ',b.toString());
console.log('cwd ',process.cwd());
console.log('cpu usage', process.cpuUsage());
console.log('Memory usage', process.memoryUsage()); 
console.log('env ',process.env.USER);

console.log('HomeDir ', os.homedir());
console.log('TempDir ', os.tmpdir());
console.log('Platform ', os.platform());
console.log('Uptime ', os.uptime());
console.log('cpus ', os.cpus().length);
console.log('hostname ',os.hostname());