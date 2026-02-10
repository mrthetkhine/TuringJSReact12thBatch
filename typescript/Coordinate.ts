type TwoD = {
    x:number,
    y:number
}
type ThreeD = TwoD & {
    z:number
}

let point2D:TwoD = {x:10, y:20};
let point3D:ThreeD = {x:10, y:20, z:30};