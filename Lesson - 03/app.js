// const add = (num1, num2) => {
//   num2 = num2 || 0;
//   const total = num1 + num2;
//   return total;
// };

const add = (num1 = 2, num2 = 4) => {
  const total = num1 + num2;
  return total;
};

const result = add();
console.log(result);
