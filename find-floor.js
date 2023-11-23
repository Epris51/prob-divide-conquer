function findFloor(arr, num) {
    let floor = -1;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is less than or equal to num
      if (arr[i] <= num) {
        // Update floor to the current element
        floor = arr[i];
      } else {
        // Break the loop if the current element is greater than num
        // because we won't find a larger floor in a sorted array
        break;
      }
    }
  
    return floor;
  }
  
  module.exports = findFloor;
  