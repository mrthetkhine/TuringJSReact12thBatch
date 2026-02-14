class Position{
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
type PositionInstance = InstanceType<typeof Position>;
let pos: PositionInstance = new Position(10, 20);
console.log(`Position: (${pos.x}, ${pos.y})`);