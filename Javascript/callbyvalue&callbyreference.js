//call by value
//The original variable is not modified on changes in other variables.
//Actual and copied variables will be created in different memory locations.
let a = 4;
let b;
b = a;
a = 3;
//“b” was just a copy of “a” It has its own space in memory. When we change “a” it does not have any impact on the value of “b”.
console.log(a);
console.log(b);

//call by reference
//The original variable gets modified on changes in other variables.
//Actual and copied variables are created in the same memory location.
let c = { greeting: "welcome" };
let d;
d = c;
c.greeting = "welcome to call by reference";
console.log(c);
console.log(d);
