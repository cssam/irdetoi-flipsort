module.exports = {
  doFlipSort: (inputArr, k, debugOn) => {
    let flipPart = [];
    let nonFlipPart = [];
    let resultArr = [];
    let l = inputArr.length;
    if (k < l + 1) {
      flipPart = inputArr.slice(0, k);
      if (debugOn) {
        console.log("flipPart: ", flipPart);
      }
      nonFlipPart = inputArr.slice(k, l + 1);
      if (debugOn) {
        console.log("nonFlipPart: ", nonFlipPart);
      }
      resultArr = flipPart.reverse();
      if (debugOn) {
        console.log("resultArr of flippart: ", resultArr);
      }
      resultArr = resultArr.concat(nonFlipPart);
      if (debugOn) {
        console.log("resultArr after concat: ", resultArr);
      }
    }
    return resultArr;
  },
};
