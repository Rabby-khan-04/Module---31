const max = Math.max(12, 85, 999, 78);
console.log(max);

const nums = [21, 32, 23, 32, 45, 32, 65, 76, 46, 75];

console.log(...nums);

const max2 = Math.max(...nums);
const min = Math.min(...nums);
// console.log(max2);
// console.log(min);

const numbers = nums;
const numbers2 = [444, 555, ...numbers, 111];

console.log(numbers);
numbers.push(3);
numbers.push(777);
// console.log(numbers);
// console.log(nums);

console.log(numbers2);
