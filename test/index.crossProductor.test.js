const { test, expect } = require('@jest/globals');
const { crossProductor } = require('../src/index');


test( '测试 crossProductor 方法1', () => {

  let data = [
    [],
    []
  ];
  let res1 = crossProductor( data );
  expect(res1).toEqual( [ ] );

} );


test( '测试 crossProductor 方法2', () => {
  let data = [
    [ 1, 2, 3 ],
    [ 1, 2 ]
  ];
  let res2 = crossProductor( data );
  expect(res2).toEqual( [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ] ] );

} );

test( '测试 crossProductor 方法3', () => {
  let data = [
    [ '白色', '黑色' ],
    [ 37, 38, 39, 40, 41, 42 ]
  ];
  
  let res = crossProductor( data );
  expect(res).toEqual( [ 
    [ '白色', 37 ], [ '白色', 38 ], [ '白色', 39 ], [ '白色', 40 ], [ '白色', 41 ], [ '白色', 42 ], 
    [ '黑色', 37 ], [ '黑色', 38 ], [ '黑色', 39 ], [ '黑色', 40 ], [ '黑色', 41 ], [ '黑色', 42 ], 
  ] );

} );
