var relativeSortArray = function (arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        arr.push(arr1[j]);
        arr1[j] = "_";
      }
    }
  }
  let ch;
  arr1 = arr1.filter((a) => a !== "_");
  if (arr1.length > 0) {
    for (let i = 1; i < arr1.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr1[i] < arr1[j]) {
          ch = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = ch;
        }
      }
    }
    arr = arr.concat(arr1);
  }
  return arr;
};

let arr1 = [26, 21, 11, 20, 50, 34, 1, 18];
let arr2 = [21, 11, 26, 20];
relativeSortArray(arr1, arr2);
