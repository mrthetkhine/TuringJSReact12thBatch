type Pair = [number, string];
let pair: Pair = [1, "Jhon"];
console.log('Pair:', pair[0], ' - ', pair[1]);

let another : [number,string,boolean] = [2, "Doe", true];
console.log('Another:', another[0], ' - ', another[1].toUpperCase(), ' - ', another[2]);

let [age,studentName,isStudent] = another;
console.log('Destructured:', age, studentName.toUpperCase(), isStudent);

let someTuple: readonly [number, string] = [3, "Smith"];
console.log('Readonly Tuple:', someTuple[0], ' - ', someTuple[1] );
//someTuple[0] = 4; // Error: Cannot assign to '0' because it is a read-only property.