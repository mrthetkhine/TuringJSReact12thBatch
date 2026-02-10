let str = "123";
let num = str as unknown as number;
num = + str;
console.log('typeof num ',typeof num);