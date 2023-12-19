//javascript string storing and manipulating text
let string = "badminton is playing with only shuttle";
let string2 = "It is indoor game";
//length of string
console.log(string.length);
//slice method extract a string between them convert into new string
console.log(string.slice(5, 9));
//replace a string content
console.log(string.replace("badminton", "basketball"));
console.log(string.replaceAll("basketball", "badminton "));
//lowercase
console.log(string.toLowerCase());
//uppercase
console.log(string.toUpperCase());
//concat
console.log(string.concat(".", string2));
//extracting string
//charAt()
console.log(string.charAt(10));
//method returns a UTF-16 code (an integer between 0 and 65535).
//charCodeAt
console.log(string.charCodeAt(5));
