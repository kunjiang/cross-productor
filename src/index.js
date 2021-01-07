

/**
 * 按权展开数字
 * Expand the numbers by radix
 * @param {number} num 
 * @param {number} radix 
 * @param {number} len 
 */
function splitNumByRadix( num, radix = 10, len ) {
  let _res = [];
  do {
    _res.unshift( num % radix );
  } while( num = Math.floor( num / radix ) )

  if ( typeof len === 'number' ) {
    while( _res.length < len ) _res.unshift( 0 );
  }
  return _res;
}


/**
 * 根据给定的数组列表生成组合项的数组.
 * To give combination of array that item is type array.
 * 
 * @param {Array<Array<any>>} list 需要生成的选项 
 */
function crossProductor( list ) {
  let _res = [];
  let len = list.length;                                // 长度 length
  let p = 0;                                            // 进制 radix
  let nums = list.map( item => { 
    let _n = item.length - 1;
    if ( p < item.length ) p = item.length;
    return _n;
  });                                                   // 分量最大数(0-base) the max of each components

  // 计算十进制上限
  let supremum = parseInt( nums.join('') - 0, p ) + 1;  // 最大值取不到 not match maximum

  // 循环生成数 to generate
  for ( let i = 0; i < supremum; i++ ) {
    let numdec = i;

    let _proj = splitNumByRadix( numdec, p, len );
    if ( _proj.every( (proj, j) => proj <= nums[ j ] ) ) {
      _res.push( _proj.map( (proj, j) => list[ j ][ proj ] ) );
    }
  }

  return _res;

}



module.exports = {
  crossProductor
  , splitNumByRadix
};