type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return 12;
};
//console.log('F1. ',f1().toFixed()); 
console.log('F1. ',f1());
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};