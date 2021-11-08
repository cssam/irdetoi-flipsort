const CLI = require("clui");
const clc = require("cli-color");

let Line = CLI.Line;
let LineBuffer = CLI.LineBuffer;

let outputBuffer = new LineBuffer({
  x: 0,
  y: 0,
  width: "console",
  height: "console",
});

let message = new Line(outputBuffer)
  .column("Flip Sort Final Results", 30, [clc.green, clc.bold])
  .fill()
  .store();

let blankLine = new Line(outputBuffer).fill().store();

module.exports.print = (endResult, final) => {
  //console.log(endResult);

  let finalState = new Line(outputBuffer)
    .column("Final State", 20, [clc.red, clc.bold])
    .column(final, 50, [clc.red])
    .fill()
    .store();

  let startState = new Line(outputBuffer)
    .column("Start State", 20, [clc.blue, clc.bold])
    .column(endResult.startState, 30, [clc.blue])
    .fill()
    .store();

  let header = new Line(outputBuffer)
    .column("Attempt", 20, [clc.cyan, clc.bold])
    .column("Input Array", 20, [clc.cyan, clc.bold])
    .column("Flipped Array", 20, [clc.cyan, clc.bold])
    .column("K value", 11, [clc.cyan, clc.bold])
    .fill()
    .store();

  let blankLine = new Line(outputBuffer).fill().store();

  let flipResultArr = endResult.flipResults;

  let line;
  for (let l = 0; l < flipResultArr.length; l++) {
    let flipResult = flipResultArr[l];
    line = new Line(outputBuffer)
      .column(flipResult.attempt, 20, [clc.cyan])
      .column(flipResult.inArr, 20, [clc.cyan])
      .column(flipResult.flippedArr, 20, [clc.cyan])
      .column(flipResult.k, 11, [clc.cyan])
      .fill()
      .store();
  }

  let kValue = new Line(outputBuffer)
    .column("K values", 20, [clc.blue, clc.bold])
    .column(endResult.kArray, 30, [clc.blue])
    .fill()
    .store();

  outputBuffer.output();
};
