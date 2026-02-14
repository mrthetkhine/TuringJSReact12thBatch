class ThreeD
{
    /*
    x:number;
    y:number;
    z:number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    */
    constructor(public x: number, public y: number, public z: number) {
        console.log('ThreeD constructor');
    }
    display()
    {
        console.log(`ThreeD(${this.x}, ${this.y}, ${this.z})`);
    }
}
let point3D = new ThreeD(10, 20, 30);
point3D.display(); // Output: ThreeD(10, 20, 30)