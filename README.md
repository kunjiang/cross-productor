# sku 生成算法

用于根据成品项的列表生成可用的所有组合. 逻辑上可以理解为生成给定多个集合(数组)的笛卡尔积.

用法:

```js
const { crossProductor } = require( 'cross-productor' );

let data = [
  [ '白色', '黑色' ],
  [ 37, 38, 39, 40, 41, 42 ]
];

let res = crossProductor( data );
// => 
// [ 
//   [ '白色', 37 ], [ '白色', 38 ], [ '白色', 39 ], [ '白色', 40 ], [ '白色', 41 ], [ '白色', 42 ], 
//   [ '黑色', 37 ], [ '黑色', 38 ], [ '黑色', 39 ], [ '黑色', 40 ], [ '黑色', 41 ], [ '黑色', 42 ], 
// ]
```




# sku generating arithmetic

To generate all combination of product list. 
In fact, it's to give Cartesian Product of multiple sets ( product types array ).

Usage:

```js
const { crossProductor } = require( 'cross-productor' );

let data = [
  [ 'white', 'black' ],
  [ 37, 38, 39, 40, 41, 42 ]
];

let res = crossProductor( data );
// => 
// [ 
//   [ 'white', 37 ], [ 'white', 38 ], [ 'white', 39 ], [ 'white', 40 ], [ 'white', 41 ], [ 'white', 42 ], 
//   [ 'black', 37 ], [ 'black', 38 ], [ 'black', 39 ], [ 'black', 40 ], [ 'black', 41 ], [ 'black', 42 ], 
// ]
```