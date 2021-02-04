const fns = require('../index');

let data = [
  [ '白色' ],
  [ 19 ]
];


let res1 = fns.crossProductor( data );
let res2 = fns.crossProductor( data.map(Object.entries) );


console.log(res1);
console.log(res2);

