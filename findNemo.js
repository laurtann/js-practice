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

printFirstTwoBoxes(boxes); // O(2) -> constant