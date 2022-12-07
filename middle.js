const middle = function(array) {
  let newArr = [];
    if (array.length <= 2 && array.length > 0){
      console.log("The array has only 1 or 2 elements") 
    } else if (array.length % 2 === 0){
        newArr =[array[(array.length/2)-1],array[array.length/2]]
      console.log("The array has an even number of elements"); 
    } else if (array.length % 2 !== 0){
        newArr = [array[Math.floor(array.length/2)]]
      console.log("The array has an odd number of elements")
    }
    return newArr;  
  }

module.exports = middle;

  // The middle function takes in an array as a parameter and here we create a new empty array. For a condition, if the array length is less than or equal to 2
  // and the length is greater than 0, we console log a string saying that the array has 1 or 2 elements. ELse if the remainder of the length when divided by
  // 2 is 0, we take the empty array we had created and add the following values to it; the value that sits in the index if you were to take the array,
  // divide by 2 and subtract 1, and the second value as the arrays length divided by 1. So for example in an array of 4 numbers [1,2,3,4] the values of
  // 2 and 3 would placed in the new array. THen we have another else if statement that says if the arrays length is divisible by 2 and does not equal 0,
  // this means it is a odd number and so we place that into the new array by dividing the length of the array by 2 and flooring it to remove decimal points.
  //  we console log the outcome on wether it is an even or odd numbered amount of elements, and then finally return the new array.