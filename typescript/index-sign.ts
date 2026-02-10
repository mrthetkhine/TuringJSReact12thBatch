interface StringArray {
  [index: number]: string;
}
let arr:StringArray = ["Hello", "World"];
console.log(arr[0]); 
console.log(arr[1]);

interface Dictionary {
  [key: string]: string;
}
let dict:Dictionary = {
  "name": "Alice",
  "age": "30",
  "city": "New York"
};
console.log(dict["name"]); 
console.log(dict["age"]); 
console.log(dict["city"]);