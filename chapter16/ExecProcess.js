const child_process = require('node:child_process');
let listing = child_process.exec('ls -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }
    console.log(`Standard Output:\n${stdout}`);
    if (stderr) {
        console.error(`Standard Error:\n${stderr}`);
    }
});