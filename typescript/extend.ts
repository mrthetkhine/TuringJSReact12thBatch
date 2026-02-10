interface Cicrle {
    radius: number;
}

interface ColoredCircle extends Cicrle {
    color: string;
}
let c1:ColoredCircle = {
    radius: 10,
    color: "red",
}
console.log(c1);