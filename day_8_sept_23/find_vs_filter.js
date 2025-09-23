let arr = [11, 13, 15, 17, 19, 21];

let first_Even = arr.find(ele => ele % 2 == 0);
console.log(first_Even); // undefined

let all_Even = arr.filter(ele => ele % 2 == 0);
console.log(all_Even); // []

