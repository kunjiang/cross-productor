const { test, expect } = require('@jest/globals');
const { splitNumByRadix, parseIntExt } = require('../src/index');


test( '测试 parseIntExt 方法1', () => {

  let res1 = splitNumByRadix( 123, 10, 4 );
  let res2 = parseIntExt(res1, 10);
  expect(res2).toEqual( 123 );

} );


test( '测试 parseIntExt 方法2', () => {
  let numSrc = 255;
  let base = 16;
  let len = 4;

  let _nums = splitNumByRadix( numSrc, base, len );
  let res = parseIntExt(_nums, base);

  expect(res).toEqual( numSrc );

} );



test( '测试 parseIntExt 方法3', () => {
  let numSrc = 123456;
  let base = 32;
  let len = 4;

  let _nums = splitNumByRadix( numSrc, base, len );
  let res = parseIntExt(_nums, base);

  expect(res).toEqual( numSrc );

} );




test( '测试 parseIntExt 方法4', () => {
  let numSrc = 123456;
  let base = 50;
  let len = 4;

  let _nums = splitNumByRadix( numSrc, base, len );
  let res = parseIntExt(_nums, base);

  expect(res).toEqual( numSrc );

} );

test( '测试 parseIntExt 方法5', () => {
  let numSrc = 0;
  let base = 1;
  let len = 4;

  let _nums = splitNumByRadix( numSrc, base, len );
  let res = parseIntExt(_nums, base);

  expect(res).toEqual( numSrc );

} );