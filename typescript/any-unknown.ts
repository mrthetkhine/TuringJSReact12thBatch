let a : any = "Hello World";
console.log(a);

a = 42;
console.log(a);

a =()=> console.log("This is a function assigned to 'a'");
a();

a  = { key: "value" };
console.log(a.key);

let b: unknown = "Unknown Type";
console.log(b);

b = 100;
console.log(b);

b = { anotherKey: "anotherValue" };
console.log(b);