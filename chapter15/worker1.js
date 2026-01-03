console.log('worker loaded ');
function delay(ms)
{
    let start = new Date();
    while ( (new Date() - start) < ms);
}

onmessage = (event) => {
    console.log('Message received in worker:', event.data);
    delay(5000); // Simulate a time-consuming task
    postMessage({
        result: event.data.value * 2
    });
}