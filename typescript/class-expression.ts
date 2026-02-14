let clazz= class<T>{
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    display()
    {
        console.log(`Value: ${this.value}`);
    }
} 
let box = new clazz<number>(123);
box.display(); // Output: Value: 123
let strBox = new clazz<string>("Hello");
strBox.display(); // Output: Value: Hello