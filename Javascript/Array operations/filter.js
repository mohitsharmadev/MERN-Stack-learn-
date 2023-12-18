//filter an array
//Syntax array.filter((currentValue,index,arr),thisValue)
let words = [
  "LockManager",
  "SVGDefsElement",
  "manager",
  "ceo",
  "googles",
  "microsoft",
  "wisflux",
];
let filterWords = words.filter((word) => word.length > 7);
console.log(filterWords);
