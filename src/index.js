
let isValueType = data => "number boolean string".indexOf(typeof data) > -1;
let isNull = data => data === null;
let isUndefined = data => data === undefined;






/** 
 * 获得 item 的深拷贝对象
 * get deep copy of item 
 */
function deepcopy( item ) {
  if ( isValueType( item ) || isNull( item ) || isUndefined( item ) ) return item;
  

  let type = Object.prototype.toString.call( item );
  let _target;
  switch( type ) {

    case '[object Object]': {
      _target = {};

      // loop property of item
      for( let k in item ) {
        if ( item.hasOwnProperty( k ) ) {
          _target[ k ] = deepcopy( item[ k ] );
        }
      }
    } 
    break;

    case '[object Array]': {
      _target = [];

      // loop property of item
      for( let i = 0; i < item.length; i++ ) {
          _target[ i ] = deepcopy( item[ k ] );
      }
    } 
    break;

    case '[object RegExp]': {
      _target = new RegExp(String(item)
                    .replace( /^\/|\/$/g, '')
                    .replace( /\\/g, '\\' ), 
                    item.flags
                ); 
    } 
    break;
      
    case '[object Date]': {
      _target = new Date( item.valueOf() );
    }
    break;
  }


  return _target;

}

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
 * 将 10 进制位表示的数组形式的数字, 按照 权 转换为 十进制数
 * parseInt 方法权取值上限为 36
 * 
 * @param {number[]} nums 
 * @param {number} radix 
 */
function parseIntExt(nums, radix = 10) {
  let numdec = 0;
  for (let i = 0; i < nums.length; i++) {
    numdec = (numdec * radix) + (nums[i] - 0);
  }
  return numdec;
}


/**
 * 根据给定的数组列表生成组合项的数组.
 * To give combination of array that item is type array.
 * 
 * @param {Array<Array<any>>} list 需要生成的选项 
 * @param {boolean} deep 成员若是对象是否需要深拷贝, 默认不需要 need deep clone, default is shallow copy
 */
function crossProductor( list, deep = false ) {
  let _res = [];
  let len = list.length;                                // 长度 length
  let p = 0;                                            // 进制 radix
  let nums = list.map( item => { 
    let _n = item.length - 1;
    if ( p < item.length ) p = item.length;
    return _n;
  });                                                   // 分量最大数(0-base) the max of each components

  // 计算十进制上限
  // let supremum = parseInt( nums.join('') - 0, p ) + 1;  // 最大值取不到 not match maximum
  let supremum = parseIntExt( nums, p ) + 1;

  // 输入的 list 如果是 1 x 1 的矩阵 ( [ [ 1 ], [ 2 ] ] ), 会导致
  // 在计算 parseInt( 0, 1 ) 时会得到 NaN
  if ( supremum != supremum ) supremum = 1;

  // 循环生成数 to generate
  for ( let i = 0; i < supremum; i++ ) {
    let numdec = i;

    let _proj = splitNumByRadix( numdec, p, len );
    if ( _proj.every( (proj, j) => proj <= nums[ j ] ) ) {
      _res.push( _proj.map( (proj, j) => deep ? deepcopy( list[ j ][ proj ] ) : list[ j ][ proj ] ) );
    }
  }

  return _res;

}



module.exports = {
  crossProductor
  , splitNumByRadix
  , deepcopy
  , parseIntExt
};