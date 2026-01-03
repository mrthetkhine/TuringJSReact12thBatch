async function getData()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log('Data length: ', data);
}
getData();