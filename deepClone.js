const _ = require('lodash');

let mung1 = {name: "mung1", age: 1}
let mung2 = {name: "mung2", age: 2}
let mung3 = {name: "mung3", age: 3}
let mung4 = {name: "mung4", age: 4}
let mung5 = {name: "mung5", age: 5}

let a = [
  mung1, mung2, mung3, mung4, mung5
]


let b = _.cloneDeep(a)
b[0].age = 111

console.log(mung1)
console.log(a[0])
console.log(b[0])