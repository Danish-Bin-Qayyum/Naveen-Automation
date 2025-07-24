/*Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50*/
// Define a function named test50 that takes two parameters, x and y
function test50(x, y) {
  // Return true if x is equal to 50 or y is equal to 50 or the sum of x and y is equal to 50; otherwise, return false
  return ((x == 50 || y == 50) || (x + y == 50));
}
// Log the result of calling the test50 function with the arguments 50 and 50 to the console
console.log(test50(50));//true

/*Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.*/
// Define a function named testhundred that takes a parameter x
function testhundred(x) {
  // Return true if the absolute difference between 100 and x is less than or equal to 20,
  // or the absolute difference between 400 and x is less than or equal to 20; otherwise, return false
  return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}
// Log the result of calling the testhundred function with the argument 10 to the console
console.log(testhundred(10));

/*Write a JavaScript program to check two given integers whether one is positive and another one is negative.*/
// Define a function named positive_negative that takes two parameters, x and y
function positive_negative(x, y) {
  // Check if either x is negative and y is positive, or x is positive and y is negative
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    // If true, return true
    return true;
  } else {
    // If false, return false
    return false;
  }
}
// Log the result of calling the positive_negative function with the arguments 2 and 2 to the console
console.log(positive_negative(2, 2));








































































































