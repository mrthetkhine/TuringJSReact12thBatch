type Container = {
    value: string
}

type IntContainer = {
    value :number
}
type BooleanContainer = {
    value: boolean
}
type AnyBox ={
    value: any
}
let box :AnyBox = {
    value: "Hello"
}
console.log('box ',box);

let box2 :AnyBox = {
    value: 123
}
console.log('box2 ',box2.value.toUpperCase());