const fns = require('../index');

let data = [
  [ '白色', '黑色', '红色', '棕色' ],
  [ 19, 20, 21, 22, 23 ],
  [ 'a', 'b', 'c' ],
  [ 'aa', 'bb', 'cc', 'dd', 'ee' ],
];

let res1 = fns.splitNumByRadix( 0, 16, 4 );


let start = +new Date;
let res2 = fns.crossProductor( data );
let end = +new Date;

let obj1 = {
  name: 'jim'
};
obj1.refObj = obj1;
let res3 = fns.deepcopy( obj1 );



console.log(start, end, end-start);