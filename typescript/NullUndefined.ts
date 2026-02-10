type NullableOrString = string | null | undefined; 

let str:NullableOrString = "Hello";
str = null;
str = undefined;

let str2: string ;
//str2 = undefined;
str2 = "something";
console.log('str2 ',str2); // Error: Variable 'str2' is used before being assigned.