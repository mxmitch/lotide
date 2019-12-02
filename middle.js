const middle = function(array) {
  let newArray = [];
  if (array.length >= 3) {
    if (array.length % 2 !== 0) {
      let middle = Math.floor(array.length / 2);
      newArray.push(array[middle]);
    } else if (array.length % 2 === 0) {
      let highMiddle = Math.floor(array.length / 2);
      newArray.push(array[highMiddle - 1]);
      newArray.push(array[highMiddle]);
    }
  }
  return newArray;
}

module.exports = middle;