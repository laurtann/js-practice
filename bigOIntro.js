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

// funChallenge(); // O(4n + 3) -> debatable is assignments should be calc'd => reduce to O(n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// anotherFunChallenge(); // O(7n + 4) => reduce to O(n)

const boxes2 = [1, 2, 3];

function compressBoxesTwice(a, b) {
  a.forEach(function(a) {
    console.log(a);
  });

  b.forEach(function(b) {
    console.log(b);
  });
}

compressBoxesTwice(boxes, boxes2); // O(a + b)
