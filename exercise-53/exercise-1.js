function sum(...nums) {
  return nums.reduce((num, number) => num + number);
}

console.log(sum(1, 2, 3, 4, 5));
