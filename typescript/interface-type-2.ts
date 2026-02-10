interface Circle{
    radius: number;
    getArea: () => number;
}
let circle : Circle = {
    radius: 10,
    getArea: function(): number{
        return Math.PI * this.radius * this.radius;
    }
};
console.log('Circle Area:', circle.getArea());