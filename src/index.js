
exports.min = function min (array) {
  if (!array || array.length == 0){
    return 0;
  } else{
  let minA = array[0];
  for(i = 1; i <= array.length; i++){
    if(minA > array[i]){
      minA = array[i];
    }
  }
  return minA;
  }


  
}

exports.max = function max (array) {
  if (!array || array.length == 0){
    return 0;
  } else{
  let maxA = array[0];
  for(i = 1; i <= array.length; i++) {
    if(maxA < array[i]){
      maxA = array[i];
    }
  }
  return maxA;
}
}

exports.avg = function avg (array) {
  if (!array || array.length == 0){
    return 0;
  } else{
  var sum = 0;
    for(var i = 0; i < array.length; i++) {
    sum += array[i];
    }
  return  sum / array.length;
  }
}
