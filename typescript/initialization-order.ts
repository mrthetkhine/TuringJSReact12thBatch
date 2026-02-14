class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}
 
class Derived extends Base {
  name = "derived";
  constructor() {
    super();
    console.log("Derived name is " + this.name);
  }
}
let d = new Derived();