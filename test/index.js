const fns = require('../index');

// let data = [
//   [ '白色' ],
//   [ 19 ]
// ];

// let data = [
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
//   [ 1 ]
// ];

// let data = [
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
//   [ 1, 2 ]
// ];

// let data = [
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
// ];


let data = [
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37
  ],
  [ 1 ]
];



let res1 = fns.crossProductor( data );
// let res2 = fns.crossProductor( data.map(Object.entries) );


console.log(res1);
// console.log(res2);

