let arr:ReadonlyArray<number> = [1,2,3,4,5];
console.log('Original Array:', arr[0]);

//arr[0] = 10;
let data:any = arr;
data[0] = 10; 
console.log('Modified Array via any:', arr[0]); // Output: 10

//let another:readonly number[] = [6,7,8,9,10];
//another[1] = [103,3];

type CustomReadonlyArray<Type> ={
    readonly [index:number]: Type;
    length: number;
}
let another:CustomReadonlyArray<number> = [6,7,8,9,10];
//another[1] = 103;
console.log('Another Array:', another[1]);
console.log('Another Array Length:', another.length);