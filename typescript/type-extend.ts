type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}
let bear: Bear = {
  name: "Winnie",
  honey: true,
}
console.log(bear);