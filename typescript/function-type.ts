type Callback = (x:number)=>void;
function processFun(callback:Callback)
{
    console.log('Start processing');
    callback(100);
    console.log('End processing');
}
processFun((x:number)=>console.log('Callback'));
function callBackFun(x:number)
{
    console.log('Second callback ',x);
}
processFun(callBackFun);

type BinarnyFun = (a:number,b:number)=>number;

function add(a:number,b:number):number
{
    return a + b;
}
let fun:BinarnyFun = add;
console.log('Result ',fun(10,20));

fun = (a:number,b:number)=>a * b;
console.log('Result ',fun(10,20));
