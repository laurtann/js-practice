const fish = ['dory', 'bruce', 'marlin', 'nemo'];

function findNemo(fishArr) {
  for (let fish of fishArr) {
    if (fish === "nemo") {
      return "FOUND NEMO";
    }
  }
  return "DIDN'T FIND NEMO";
}

console.log(findNemo(fish)); // O(n) -> Linear

const boxes = ["a", "b", "c"];

function printFirstTwoBoxes(arr) {
  console.log(arr[1]);
  console.log(arr[2]);
}

printFirstTwoBoxes(boxes); // O(2) -> constant; just use O(1). V scalable

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChallenge(); // O(4n + 3) -> debatable is assignments should be calc'd