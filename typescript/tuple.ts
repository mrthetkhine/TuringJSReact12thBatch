function div(a: number, b: number): [number, Error | null] {
    if (b === 0) {
        return [0, new Error("Division by zero")];
    }
    return [a / b, null];
}
let [result, error] = div(10, 2);
if (error) {
    console.log("Error:", error);
} else {
    console.log("Result:", result); // Output: Result: 5
}

type StringNumberTuple = [string, number];
let tuple: StringNumberTuple = ["Age", 30];
console.log('Tuple:', tuple[0], ' Age ',tuple[1]); 