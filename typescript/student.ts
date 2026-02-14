class Student {
    static headmaster= "Mr. Smith";
    name: string;
    age: number;

    static {
        console.log('Static block executed. Headmaster is', Student.headmaster);
    }
    static {
        console.log('Static block2 executed. Headmaster is', Student.headmaster);
    }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}, Headmaster: ${Student.headmaster}`);
    }
}
let stud1 = new Student("Alice", 20);
let stud2 = new Student("Bob", 22);
Student.headmaster = "Alice Johnson";
stud1.display();
stud2.display();