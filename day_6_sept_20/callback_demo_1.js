let arr = [10, 20, 30, 40, 50];

const incrementBy5 = (ele) => ele + 5;

let arr2 = arr.map(incrementBy5);
console.log(arr2);

// map() : HigherOrder Function
// incrementBy5 : callback function