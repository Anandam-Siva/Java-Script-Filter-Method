var numbers = [1, 20, 22, 23, 25, 14, 17, 19, 25, 27, 29, 34, 35, 38, 41, 44, 74, 85];

var evenNumbers = numbers.filter(findEven);
function findEven(ele) {
    return ele % 2 == 0;
}
console.table(evenNumbers);

var oddNumbers = numbers.filter(findOdd);
function findOdd(ele) {
    return ele % 2 !== 0;
}
console.table(oddNumbers);