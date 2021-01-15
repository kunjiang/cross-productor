const fns = require('../index');

let data = [
  [ '白色', '黑色', '红色', '棕色' ],
  [ 19, 20, 21, 22, 23 ],
  [ 'a', 'b', 'c' ],
];


let res1 = fns.crossProductor( data );
let res2 = fns.crossProductor( data.map(Object.entries) );


console.log(res1);
console.log(res2);

