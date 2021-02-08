function booo(n) {
  for (let i = 0; i < n.length; i++) { // let i = 0 var assignment
    console.log("BOO");
  }
}

booo([1, 2, 3, 4, 5]); //O(1) - only care abt add'l inputs

function arrayOfHiNTimes(n) {
  let hiArr = []; // new data struc => each item new memory space O(n)
  for (let i = 0; i < n; i++) { //O(1)
    hiArr[i] = "hi";
  }
  console.log(hiArr);
}

arrayOfHiNTimes(6) // => O(n)