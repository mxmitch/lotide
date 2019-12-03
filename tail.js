const tail = function(myArray) {
  let result = [];
  for (let i = 1; i < myArray.length; i++) {
    result.push(myArray[i]);
  }
  return result;
};

module.exports = tail;