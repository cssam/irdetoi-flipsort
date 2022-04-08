/* Function to sort an array using insertion sort*/
function insertionSort(A, size) {
  var i, key, j;
  for (i = 1; i < size; i++) {
    key = A[i];
    j = i - 1;

    /* Move elements of A[0..i-1], that are
		greater than key, to one
		position ahead of their current position.
		This loop will run at most k times */
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j = j - 1;
    }
    A[j + 1] = key;
  }
}

// This code is contributed by itsok.
// A javascript program to sort a nearly sorted array

function kSort(arr, n, k) {
  let priorityQueue = [];
  // add first k + 1 items to the min heap
  for (let i = 0; i < k + 1; i++) {
    priorityQueue.push(arr[i]);
  }
  priorityQueue.sort(function (a, b) {
    return a - b;
  });

  let index = 0;
  for (let i = k + 1; i < n; i++) {
    arr[index++] = priorityQueue[0];
    priorityQueue.shift();
    priorityQueue.push(arr[i]);
    priorityQueue.sort(function (a, b) {
      return a - b;
    });
  }

  while (priorityQueue.length != 0) {
    arr[index++] = priorityQueue[0];
    priorityQueue.shift();
  }
}

// Driver Code
// let inputArgs = process.argv.slice(2);
// const arr = inputArgs.map((i) => Number(i));

// console.log("maxIndexArr: ", maxIndexArr);
// console.log("maxArr: ", maxArr);

let k = 3;
let arr = [2, 6, 3, 12, 56, 8];
let n = arr.length;
let kArray = [];
kSort(arr, n, k);

console.log("Input: arr ", arr);
console.log("Sorted Result: ", arr);
