"use strict";

// Complete this algo


const minJumps = (arr) => {
  let jumps = 0;
  let pointer = 0;
  let currVal = arr[pointer]
  if (arr[pointer] >= arr.length - 1) {
    jumps++;
    return jumps;
  } else {
    let newArr = arr.slice(pointer + 1, currVal + 1)
    let largestNum = Math.max(...newArr) // 8
    let index = arr.indexOf(largestNum)
    jumps++
    return minJumps(arr.splice(pointer,index)) + jumps
  }
};

/* [8,4]
[2,8,4,3,2,9,6,8]
evaluate currNum
  const jumps = 0
  arr.splice(currNumIndex)
  if currNum >= array.length {jumps++ return jumps}

evaluate currNum
find the largest number in its range
  {jump to that number, jump++, currNum = newNum}

  REPEAT
*/

module.exports = minJumps;
