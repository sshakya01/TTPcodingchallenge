 // Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
function sumOfTwo(a, b, v) {
  for(var i = 0; i < a.length; i++){ //loops and grabs each integer in first array
    for(var j = 0; j < b.length; j++){// loops and grab each integer in second array
      if(a[i] + b[j] === v){ // checks if the sum of the integers in array a and b is equal to target
        return true;
      }
    }
  }
  return false;
}
