type Coord = {
    x: number,
    y: number
}
function display(coord:Coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);    
};

display({x: 100, y: 200});
display({
    x: 100,
    y:300,
})

/*
type Coord = {
    z : number
}*/