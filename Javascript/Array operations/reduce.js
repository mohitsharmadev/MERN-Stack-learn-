//method executes a reducer function for array element
//array.reduce(total,currentValue,currentIndex,arr),initialValue)
const array = [2, 5, 9, 6, 3, 7];
let initialValue = 0;
let result = array.reduce(
  (initialValue, currentValue) => initialValue + currentValue
);
console.log(result);
//second example
const arr = [2, 6, 3, 4];
func = (a, b) => {
  return a * b;
};
let output = arr.reduce(func);
console.log(output);
