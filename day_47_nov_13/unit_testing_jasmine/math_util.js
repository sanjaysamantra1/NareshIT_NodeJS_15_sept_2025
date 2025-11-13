function sumOfDigits(num) {
    let sum = 0;
    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

// 1. sum - Adds an array of numbers
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// 2. isEven - Checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// 3. deepClone - Deep clones an object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 4. mergeObjects - Merges two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 5. findMax - Finds the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// 6. removeDuplicates - Removes duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 7. flattenArray - Flattens a nested array
function flattenArray(arr) {
    return arr.flat();
}

// 8. capitalize - Capitalizes the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// 9. isPalindrome - Checks if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// 10. countOccurrences - Counts the occurrences of an element in an array
function countOccurrences(arr, element) {
    return arr.filter(item => item === element).length;
}

let cars = ['Tata', 'Honda'];
function addNewCar(newCar) {
    cars.push(newCar);
}

module.exports = {
    sumOfDigits,
    sum,
    isEven,
    deepClone,
    mergeObjects,
    findMax,
    removeDuplicates,
    flattenArray,
    capitalize,
    isPalindrome,
    countOccurrences,
    cars,
    addNewCar
};