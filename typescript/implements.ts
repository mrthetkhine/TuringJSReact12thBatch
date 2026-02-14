interface Flyable
{
    fly(): void;
}
class Bird implements Flyable
{

    fly()
    {
        console.log("Bird is flying");
    }
}
let flyable:Flyable = new Bird();
flyable.fly();