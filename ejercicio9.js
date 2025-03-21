
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(suma) {
let sum = 0;
for (let i = 0; i < suma.length; i++) {
  sum += suma[i];
}
return sum;
}
console.log(sumNumbers(numbers));