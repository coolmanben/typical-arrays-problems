
exports.max = function min (array) {
  var res = 0 ;
  if ( (array.length > 0 ) && ( typeof array != 'undefined') ) {  
    res = Math.max.apply(null, array);
  }                     
  return res; 
}

exports.min = function max (array) {
  var res = 0 ;
  if ( (array.length > 0 ) && ( typeof array != 'undefined') ) {  
    res = Math.min.apply(null, array);
  }                     
  return res; 
}

exports.avg = function avg (array) {
  var sum = 0;
  var res = 0;
  if ( (array.length > 0 ) && ( typeof array != 'undefined') ) { 
      for (var i = 0; i < array.length; i++) {
          sum = sum + array[i];
      }
    res = sum / array.length;
  }
 return res;
}