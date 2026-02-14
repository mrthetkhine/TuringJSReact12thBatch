class Container
{
    x = 10;
    private y = 20;
    #z = 30;
    protected show()
    {
        console.log('Container show ',this.y);
    }
}
class SpecialContainer extends Container
{
    display()
    {
        super.show(); // Accessing protected method from subclass
        console.log('SpecialContainer display ');
    }
}
let container = new SpecialContainer();
container.display();

let obj: any = container;
console.log('Container y:', container['y']); 
//console.log('Container z:', container.#z);
console.log('Container x:', container.x); // Output: Container x: 10