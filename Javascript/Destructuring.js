let array = [1, 2, 3, 4, 9, 6];
//this is destructuring
let [a, b, c, d, ...rest] = array;
//Not need doing this
// let a = array[0];
// let b=array[1];
console.log(a, b, c, d, rest);
//destructure objects
let { o, m } = { o: 1, m: 5 };
console.log(o, m);
