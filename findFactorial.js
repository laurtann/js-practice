// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) { // O(n)
  if (number == 0) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) { //O(n)
  if (number == 0) {
    return 1;
  }
  let answer2 = number;
  for (let i = number - 1; i > 0; i--) {
    answer2 *= i;
  }
  return answer2;
}
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));