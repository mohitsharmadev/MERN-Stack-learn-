//map method creates a new array from calling a function for every array element
//syntax array.map(function(currentValue,index,arr)thisValue)
//example of map operations
let number = [2, 5, 6, 9, 8, 4];
let map = number.map((value, index, array) => {
  console.log(value, index, array);
  return value + 6;
});
let nap;
nap = map;
console.log(map);
let newArray = nap.map((value, index, array) => {
  console.log(value, index, array);
  return value + 9;
});
console.log(newArray);
let square = newArray.map(Math.sqrt);
console.log(square);
