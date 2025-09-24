let arr = [10, 12, 14, 16, 18, 19];

let all_even = arr.every(ele => ele % 2 === 0); // false
console.log(all_even);

let atlease_one_even = arr.some(ele => ele % 2 === 0); // true
console.log(atlease_one_even)