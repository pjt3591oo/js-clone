class _MyObj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let myObj1 = new _MyObj(1, 2);
let myObj2 = myObj1

console.log(myObj1)
console.log(myObj2)

myObj2.x = 20

console.log(myObj1)
console.log(myObj2)

console.log(myObj1.__proto__)