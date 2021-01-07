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