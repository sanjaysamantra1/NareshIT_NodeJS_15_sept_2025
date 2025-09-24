let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((prev, curr) => {
    // console.log(prev, curr);
    return prev + curr;
}, 0);
console.log(`sum is ${sum}`);


// reverse a string using reduce()
let str = 'SACHIN';
let revStr = str.split('').reduce((prev, curr) => {
    // console.log(prev, curr);
    return curr + prev;
}, '');
console.log(revStr)


/* 
    10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
    output = {10:2, 20:1, 30:2 , 40:1, 50:2} 
*/
let input = [10, 20, 30, 40, 50, 10, 30, 50]
let result = input.reduce((obj, ele) => {
    if (obj[ele]) {
        obj[ele] = obj[ele] + 1;
    } else {
        obj[ele] = 1;
    }
    return obj;
}, {});
console.log(result);

