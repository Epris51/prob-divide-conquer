function countZeroes(arr) {
    // Initialize a counter for zeroes
    let count = 0;
  
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is 0, increment the count
      if (arr[i] === 0) {
        count++;
      }
    }
  
    // Return the total count of zeroes
    return count;
  }
  
  module.exports = countZeroes;
  