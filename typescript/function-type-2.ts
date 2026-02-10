let fun:Function = function() {
    console.log("This is a function assigned to 'fun'");
};

fun();

fun = (a:number, b:number) => a+b;
console.log('fun result:', fun(5, 10)); // Output: 15