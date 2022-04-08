findMaxIndex = (arr, k) => {
  let max = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < k; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return { max, maxIndex };
};

flip = (arr, k) => {
  let i = 0;

  while (i < k) {
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    i++;
    k--;
  }
  return arr;
};

pancakeSort = (arr) => {
  let i = arr.length;
  while (i > 1) {
    let { max, maxIndex } = findMaxIndex(arr, i);
    if (maxIndex !== i - 1) {
      flip(arr, maxIndex);
      flip(arr, i - 1);
      maxIndexArr.push(maxIndex);
      maxArr.push(max);
    }
    i--;
  }
  return arr;
};

let maxIndexArr = [];
let maxArr = [];
let inputArgs = process.argv.slice(2);
const arr = inputArgs.map((i) => Number(i));
console.log("Input: arr ", arr);
console.log("Sorted Result: ", pancakeSort(arr));
console.log("maxIndexArr: ", maxIndexArr);
console.log("maxArr: ", maxArr);
