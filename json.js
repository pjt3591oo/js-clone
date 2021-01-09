let obj1 = {
  x: 1,
  y: 2
}

let obj2 = obj1

console.log(obj1)
console.log(obj2)

obj2.x = 20

console.log(obj1)
console.log(obj2)

console.log(obj1.__proto__)