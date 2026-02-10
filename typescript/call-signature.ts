function doSomething()
{
    console.log("doSomething called");
}
doSomething.description = "This function does something important";

type Fun = {
    (): void;
    description: string;
}
let fun:Fun = doSomething;
console.log('fun.description ',fun.description);