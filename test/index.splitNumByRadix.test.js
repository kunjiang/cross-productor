const { test, expect } = require('@jest/globals');
const { splitNumByRadix } = require('../src/index');


test( '测试 splitNumByRadix 方法1', () => {

  let res1 = splitNumByRadix( 123, 10, 4 );
  expect(res1).toEqual( [ 0, 1, 2, 3 ] );

} );


test( '测试 splitNumByRadix 方法2', () => {

  let res2 = splitNumByRadix( 255, 16, 4 );
  expect(res2).toEqual( [ 0, 0, 15, 15 ] );

} );