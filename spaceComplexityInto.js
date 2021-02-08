function booo(n) {
  for (let i = 0; i < n.length; i++) { // let i = 0 var assignment
    console.log("BOO");
  }
}

booo([1, 2, 3, 4, 5]); //O(1) - only care abt add'l inputs

function arrayOfHiNTimes(n) {
  let hiArr = [];
  for (let i = 0; i < n; i++) { // let i = 0 var assignment
    hiArr[i] = "hi";
  }
  console.log(hiArr);
}

arrayOfHiNTimes(6)