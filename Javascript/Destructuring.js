let array = [1, 2, 3, 4];
//this is destructuring
let [a, b, c, d] = array;
//Not need doing this
// let a = array[0];
// let b=array[1];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//destructure objects
let { o, m } = { o: 1, m: 5 };
console.log(o, m);
