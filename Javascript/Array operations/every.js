//every method execute function for each array element than return true
//array.every(function(value,index,arr))
let array = [1, 5, 9, 17, 6, 2];
myFunc = (element) => element < 100;
let every = array.every(myFunc);
console.log(every);
