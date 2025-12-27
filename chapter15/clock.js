console.log("Clock.js loaded");
setInterval(()=>{
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
},1000);

function api()
{
    console.log("API called");
}