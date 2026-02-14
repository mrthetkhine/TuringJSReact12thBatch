class Shape
{
    constructor() {
        console.log('Shape constructor');
    }
    draw()
    {
        console.log("Draw shape");
    }
}
class Circle extends Shape
{
    _radius: number;
    constructor(radius: number) {
        super();
        this._radius = radius;
        console.log('Circle constructor');
    }
    set radius(value: number)
    {
        if (value >0) {
            this._radius = value;
        }
    }
    get area(): number
    {
        return Math.PI * this._radius * this._radius;
    }
    draw()
    {
        super.draw();
        console.log(`Draw circle with radius ${this._radius}`);
    }
}
let circle = new Circle(5);
circle.radius = -10;
circle.draw();
console.log('Circle area:', circle.area);