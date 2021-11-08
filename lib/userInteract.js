const inquirer = require("inquirer");
const minimist = require("minimist");

module.exports = {
  askArray: () => {
    const argv = minimist(process.argv.slice(2));
    const questions = [
      {
        name: "numbers",
        type: "input",
        message:
          "Enter list of comma seperated Integers. Maximum 100 numbers.\nEach number should be 1 <= arr[i] <= arr.length.\nNo spaces (as example; 3,5,4,2,1):",
        validate: function (value) {
          if (value.length == 0) {
            // check for empty
            return "Array is empty. Please enter again.";
          }
          // check for only numbers
          let regex = /^(?!,)(,?[0-9]+)+$/;
          if (!regex.test(value)) {
            return "Array contains non numeric values. Please correct them. No spaces.";
          }

          let inputArr = value.split(",").map((i) => Number(i));
          if (inputArr.length > 100) {
            // check for less than 101 numbers
            return "Array contains more than 100 numeric values. Please reduce to 100 or less.";
          }
          // check for duplicate values
          let duplicateCheck = inputArr.some((element, index) => {
            return inputArr.indexOf(element) !== index;
          });
          if (duplicateCheck) {
            return "Array contains duplicate values";
          }

          // check for any value grether than the length
          let l = inputArr.length;
          let overMaxCheck = inputArr.some((element) => {
            return element > l;
          });
          if (overMaxCheck) {
            return "Array contains values over " + l;
          }

          return true;
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  askKvalue: (l) => {
    const argv = minimist(process.argv.slice(2));
    const questions = [
      {
        name: "k",
        type: "input",
        message: "Enter k value:",
        validate: function (value) {
          if (value.length && Number(value) < l + 1) {
            return true;
          } else {
            return "Please enter k value where 1 <= k <= arr.length .";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  askContinue: () => {
    const argv = minimist(process.argv.slice(2));
    const questions = [
      {
        name: "Continue",
        type: "confirm",
        message: "Do you want to continue:",
        validate: function (value) {
          if (typeof value === "boolean") {
            return value;
          } else {
            return false;
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
