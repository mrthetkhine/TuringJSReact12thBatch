type StringOrNumber = string | number;
let a: StringOrNumber = "Hello";
//a = 123;
console.log('a ', a.toUpperCase());

function print(id: StringOrNumber) {
    if(typeof id === "string") {
        console.log('id ',id.toUpperCase());
    }
    else{
        console.log('id ',id.toFixed());
    }
}
print("Hello");
print(123)