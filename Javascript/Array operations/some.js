//some method are passes a test any array of the element that returns true
//array.some(function(value,index,arr))
let array = [2, 6, 9, 8, 5];
myFunc = (element) => element % 20 === 0;
let some = array.some(myFunc);
console.log(some);
