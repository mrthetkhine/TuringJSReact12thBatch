function demo(x?:number)
{
    console.log('demo ',x);
}
demo();
demo(5);

function defaultDemo(x:number = 10)
{
    console.log('defaultDemo ',x);
}
defaultDemo();
defaultDemo(20);