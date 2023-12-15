const Array = ["mo", "ho", "to", "lo", "ko", "io", "vo"];

//Access  an array
let a = Array[2];
console.log(a);

//change an array
Array[2] = "no";
console.log(Array);

//convert array in string
let b = Array.toString();
console.log(b);

//length of an array
let length = Array.length;
console.log(length);

//Access the last array element
let last = Array[Array.length - 1];
console.log(last);

//adding array element
Array.push("mo");
console.log(Array);

//add element using length property
Array[Array.length] = "zo";
console.log(Array);
