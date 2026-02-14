abstract class Human
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }
    abstract work():void;
    
}
class Teacher extends Human
{
    constructor(name:string)
    {
        super(name);
    }
    work()
    {
        console.log(`${this.name} is teaching`);
    }
}
let h = new Teacher("John"); // Error: Cannot create an instance of an abstract class.
h.work();