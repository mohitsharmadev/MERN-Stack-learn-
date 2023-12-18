//find method return a value of that first element passes a test
let array = [1, 2, 2, 98, 7];
let find = array.find((value) => value > 4);
console.log(find);
//second example
let arr = [2, 6, 9, 8];
myFunc = (age) => {
  return age > 8;
};
let first = arr.find(myFunc);
console.log(first);
