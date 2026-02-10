class Human
{
    name: string;
    constructor(name: string)
    {
        console.log("Human constructor");
        this.name = name;
    }
}
class Doctor extends Human
{
   
    constructor(name: string)
    {
        super(name);
        console.log("Doctor constructor");
        
    }
}
type SomeConstructor = {
  new (s: string): Human;
};

let ctor : SomeConstructor = Human;
let h1 = new ctor("Alice");
console.log(h1.name);

ctor = Doctor;
let h2 = new ctor("Bob");
console.log(h2.name);