class Point
{
    x: number;
    y: number;
    z!: number ;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        console.log('Point constructor');
    }
    move(dx: number, dy: number)
    {
        this.x += dx;
        this.y += dy;
    }
    display()
    {
        console.log(`Point(${this.x}, ${this.y} , ${this.z})`);
    }
}
let point = new Point(10, 20);
point.move(5, -5);
point.display(); // Output: Point(15, 15, undefined)