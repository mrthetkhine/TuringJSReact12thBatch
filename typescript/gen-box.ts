type GenBox<T> = {
  value: T;

};
let numBox : GenBox<number> = {
  value: 123
}
console.log('numBox ',numBox.value.toFixed());

let strBox : GenBox<string> = {
  value: "Hello"
}
console.log('strBox ',strBox.value.toUpperCase());

let arr:Array<number> = [1,2,3,4,5];