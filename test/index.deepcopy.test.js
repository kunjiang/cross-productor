const { test, expect } = require('@jest/globals');
const { deepcopy } = require('../src/index');


test( 'test deepcopy func 1', () => {
    
  expect( [
    [ '白色', '黑色', '红色', '棕色' ],
    [ 19, 20, 21, 22, 23 ],
    [ 'a', 'b', 'c' ],
    [ 'aa', 'bb', 'cc', 'dd', 'ee' ],
  ] ).toEqual(
    [
      [ '白色', '黑色', '红色', '棕色' ],
      [ 19, 20, 21, 22, 23 ],
      [ 'a', 'b', 'c' ],
      [ 'aa', 'bb', 'cc', 'dd', 'ee' ],
    ] 
  );

} );



test( 'test deepcopy func 2', () => {
    
  expect( { name: 'jim', age: 10, gender: 'male' } ).toEqual( { name: 'jim', age: 10, gender: 'male' } );
  expect( { name: 'tom', age: 11, gender: 'female' } ).toEqual( { age: 11, name: 'tom', gender: 'female' } );

} );



test( 'test deepcopy func 3', () => {
    
  let obj1 = {
    name: 'jim',
    age: 39,
    children: [
      { name: 'joy', age: 10, gender: 'female' },
      { name: 'lily', age: 11, gender: 'male' },
    ],
    gender: 'male'
  };
  let obj2 = {
    name: 'jim',
    age: 39,
    children: [
      { name: 'joy', age: 10, gender: 'female' },
      { name: 'lily', age: 11, gender: 'male' },
    ],
    gender: 'male'
  };

  expect( obj1).toEqual( obj2  );

} );




test( 'test deepcopy func 3', () => {

  let now = +new Date();
  let obj1 = {
    number: 123,
    boolean: true,
    string: 'this is a string',
    obj: [ {}, { a: 'a', b: 1, c: true, d: [] }, 1, 2, true, false, '', /123/g, /1/m, /abc/i, /^(.+).+/img, new Date(now) ],
    date: new Date(now * 2)
  };
  let obj2 = {
    number: 123,
    boolean: true,
    string: 'this is a string',
    obj: [ {}, { a: 'a', b: 1, c: true, d: [] }, 1, 2, true, false, '', /123/g, /1/m, /abc/i, /^(.+).+/img, new Date(now) ],
    date: new Date(now * 2)
  };

  expect( obj1).toEqual( obj2  );

} );



// test( 'test deepcopy func 4', () => { 

// } );