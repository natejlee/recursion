// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if ( typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if ( Array.isArray(obj) ){
    var results = [];
    for ( var i = 0; i < obj.length; i++){
      results.push( stringifyJSON(obj[i]) );
    }
    return '[' + results.join(',') + ']';
  }
  if ( obj && typeof obj === 'object'){
    var results = [];
    for ( var key in obj ) {
      if ( typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function'){
        results.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]) );
      }
    }
    return '{' + results.join(',') + '}';
  }
  return '' + obj;
};
