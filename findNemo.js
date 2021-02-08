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