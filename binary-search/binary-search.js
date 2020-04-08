"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  console.log('TARGET------>',target)
  console.log('ARRAY------->',array)


  if (array.length === 2) {
    if (array[0] === target || array[1] === target) {
      return true;
    } else {
      return false
    }
  }
  if ( array.length === 1){
    if ( array[0] === target){
      return true
    } else {
      return false
    }
  }
  const midpoint = Math.floor(array.length / 2);
  const currEl = array[midpoint];
  if (currEl === target) {
    return true;

  }
  if (currEl > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    return binarySearch(array.slice(midpoint + 1), target);
  }

};
module.exports = binarySearch;
/*
array.length / 2 i.e. 11/2=5.5.floor = 5
 check if node === target, return true
 if not, decide which way to go based on if target is < or > node
 REPEAT STEPS UNTIL TRUE
 ~~~~~~~~~~~~~
 if the length ===1 or 2, check both
			[4]
 [1,3]	[10]
			[5]

	if true, return true,
	else return false

 */

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/
