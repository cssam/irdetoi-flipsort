const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const userInteract = require("./lib/userInteract");
const flipSort = require("./lib/flipSort");
const printCLI = require("./lib/printCLI");
const minimist = require("minimist");

clear();

console.log(
  chalk.yellow(
    figlet.textSync("IRDETOI - Flip Sort", { horizontalLayout: "full" })
  )
);

const run = async () => {
  let args = minimist(process.argv.slice(2), {
    alias: {
      d: "debug",
    },
  });

  if (args.d == true || args.debug == true) {
    console.log("debug On: ");
    debugOn = true;
  }

  const answersArray = await userInteract.askArray();
  if (debugOn) {
    console.log("answersArray: ", answersArray);
  }
  let answerArr = answersArray.numbers.split(",");
  if (debugOn) {
    console.log("answerArr ", answerArr);
  }

  inputArr = answerArr.map((i) => Number(i));
  if (debugOn) {
    console.log("Input arr: ", inputArr);
  }
  l = inputArr.length;
  maxAtt = 10 * l;
  sortedArray = inputArr.slice(0);
  sortedArray.sort();
  //let inputArrAuto = inputArr.slice(0);
  //flipSort.autoFlipSort(inputArrAuto, debugOn);
  if (checkAnswer(inputArr)) {
    console.log("array is sorted");
  } else {
    continueFlip(inputArr);
  }
};

const continueFlip = async (toFlip) => {
  let answerK = await userInteract.askKvalue(l);
  if (debugOn) {
    console.log("answerK: ", answerK);
  }
  let k = Number(answerK.k);
  kArray.push(k);
  if (debugOn) {
    console.log("kArray: ", kArray);
  }
  let flippedArr = flipSort.doFlipSort(toFlip, k, debugOn);
  if (debugOn) {
    console.log("flippedArr: ", flippedArr);
  }
  att++;
  if (debugOn) {
    console.log("Attempt: ", att);
  }
  const flipResult = new FlipResult();
  flipResult.attempt = att.toString();
  flipResult.inArr = toFlip.toString();
  flipResult.k = k.toString();
  flipResult.flippedArr = flippedArr.toString();
  flipResultArr.push(flipResult);
  if (debugOn) {
    console.log("flipResultArr: ", flipResultArr);
  }
  console.log("Output: ", flippedArr, kArray);
  if (checkAnswer(flippedArr)) {
    if (debugOn) {
      console.log("array is sorted");
    }
    printResult("Success !!!!");
  } else if (att < maxAtt + 1) {
    continueFlip(flippedArr);
  } else {
    if (debugOn) {
      console.log("Maximum attempts exceeded");
    }
    printResult("Failed. Maximum attempts exceeded");
  }
};

/**
 * Print final result
 * @param {*} final
 */
const printResult = async (final) => {
  let endResult = new Object();
  endResult.startState = inputArr.toString();
  endResult.flipResults = flipResultArr;
  endResult.kArray = kArray.toString();
  if (debugOn) {
    console.log("endResult: ", endResult);
  }
  clear();
  printCLI.print(endResult, final);
};

/**
 * Result Object
 * @param {*} attempt
 * @param {*} inArr
 * @param {*} k
 * @param {*} flippedArr
 */
function FlipResult(attempt, inArr, k, flippedArr) {
  this.attempt = attempt;
  this.inArr = inArr;
  this.k = k;
  this.flippedArr = flippedArr;
}

/**
 * check the array for correct answer
 * @param {*} flippedArr
 * @returns boolean
 */
function checkAnswer(flippedArr) {
  if (debugOn) {
    console.log("inputArr: ", inputArr);
    console.log("flippedArr: ", flippedArr);
    console.log("sortedArray: ", sortedArray);
  }

  return flippedArr.every((val, index) => val === sortedArray[index]);
}

let debugOn = false;
let l = 0;
let kArray = [];
let inputArr = [];
let flipResultArr = [];
let att = 0;
let maxAtt = 0;
let sortedArray = [];

run();
