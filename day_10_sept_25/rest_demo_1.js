function add(...arr) {
    let sum = 0;
    console.log(Array.isArray(arr), arr);
    arr = arr.filter(ele => ele % 2 == 0)
    for (ele of arr) {
        sum = sum + ele;
    }
    console.log(sum);
}
add(2, 3, 4, 5, 6);