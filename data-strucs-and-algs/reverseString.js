// function to reverse a string
// will str always be a str?

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "invalid entry";
  }
  return str.split("").reverse().join("");
}

// another take, still O(n)
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "invalid entry";
  }
  const backwards = [];
  for (let i = str.length - 1; i >= 0 ; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log(reverse("Hi I am Laura"));
console.log(reverse(123));
// O(n)

console.log(reverse2("Hi I am Laura"));
console.log(reverse2(123));