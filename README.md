## Flip Sort CLI

# **A NodeJS CLI project to play Flip Sort**

## **Project Requirement**

Given an array of integers arr, sort the array by performing a series of flips.

In one flip we do the following steps:

Choose an integer k where 1 <= k <= arr.length.
Reverse the sub-array arr[1...k].
For example, if arr = [3,2,1,4] and we performed a flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the flip at k = 3.

Return the k-values corresponding to a sequence of flips that sort arr. Any valid answer that sorts the array within 10 \* arr.length flips will be judged as correct.

**Example 1:**

Input: arr = [3,2,4,1]
Output: [4,2,4,3]

Explanation:
We perform 4 flips, with k values 4, 2, 4, and 3.
Starting state: arr = [3, 2, 4, 1]
After 1st flip (k = 4): arr = [1, 4, 2, 3]
After 2nd flip (k = 2): arr = [4, 1, 2, 3]
After 3rd flip (k = 4): arr = [3, 2, 1, 4]
After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.
Notice that we return an array of the chosen k values of the flips.

**Example 2:**

Input: arr = [1,2,3]
Output: []

Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.

**Constraints:**

1 <= arr.length <= 100
1 <= arr[i] <= arr.length
All integers in arr are unique (i.e. arr is a permutation of the integers from 1 to arr.length).

You can chose the language of yotu choice but in Javascript the function declatation would be

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var flipSort = function (arr) {};
```

## **Project Setup Guide**

### NodeJS Installation

Download and install Node.js from https://nodejs.org

### Clone the irdetoi-flipsort project

Clone the project into your local folder from https://github.com/cssamLabs/Lab-CLI-Algorithm-FlipSort

## **Code Description**

### User Interface

Interfactive user interface developed in `\lib\userInteract.js`. Features implemented by using `inquirer` and `minimis` libraries.

```const questions = [
      {
        name: "numbers",
        type: "input",
        message:
          "Enter list of comma seperated Integers. Maximum 100 numbers.\nEach number should be 1 <= arr[i] <= arr.length.\nNo spaces (as example; 3,5,4,2,1):",
        validate: function (value) {
```

```
validate: function (value) {
          if (value.length && Number(value) < l + 1) {
            return true;
          } else {
            return "Please enter k value where 1 <= k <= arr.length .";
          }
        },
```
![k validation](https://user-images.githubusercontent.com/6191308/140938564-9e51816f-880c-43cb-98e5-4d66cae3845b.png)


### Input Validation

Checking for only numbers by RegEx

```
    let regex = /^(?!,)(,?[0-9]+)+$/;
    if (!regex.test(value)) {
    return "Array contains non numeric values. Please correct them. No spaces.";
    }
```
![validation for non number](https://user-images.githubusercontent.com/6191308/140938632-fd8aed72-7543-49ba-9bf4-9d6c23f5fbf2.png)

Checking for duplicate values

```
    let duplicateCheck = inputArr.some((element, index) => {
    return inputArr.indexOf(element) !== index;
    });
```
![duplicate number check](https://user-images.githubusercontent.com/6191308/140938963-5c8ed770-1fcf-48d9-8e8a-cba04cb29ca8.png)

Checking for any value grether than the length

```
    let l = inputArr.length;
    let overMaxCheck = inputArr.some((element) => {
    return element > l;
    });
```
![max value validation](https://user-images.githubusercontent.com/6191308/140938688-41c65e7b-0643-4068-a0da-315be62b4825.png)

### Result Output visualization

Showing the results code implemented in `\lib\printCLI.js`. Used `clui` and `cli-color` libraries.

```
    let header = new Line(outputBuffer)
        .column("Attempt", 20, [clc.cyan, clc.bold])
        .column("Input Array", 20, [clc.cyan, clc.bold])
        .column("Flipped Array", 20, [clc.cyan, clc.bold])
        .column("K value", 11, [clc.cyan, clc.bold])
        .fill()
        .store();
```

### Flip Sort Algorithm

Algorithm implemented in ```\lib\flipSort.js```.
Get the part of the array
```flipPart = inputArr.slice(0, k);```

Flip the part
```resultArr = flipPart.reverse();```

Join the parts
```resultArr = resultArr.concat(nonFlipPart);```

### Controller

Controller of the application implemented in ```index.js```.

Banner uses ```figlet``` and ```chalk```

```chalk.yellow(
    figlet.textSync("IRDETOI - Flip Sort", { horizontalLayout: "full" })
  )
```

App entry point is ```run``` function. Then keep calling ```continueFlip``` async function until maximum attemts reached.

### **Build the project**

To build the tool:

```
> cd $irdetoi-flipsort
> npm update
```

### Running the tool

```
> node index.js
```

### Running the app in debug mode

```
> node index.js -d
```

or

```
> node index.js -debug
```

### Success Senario

Step 1: Enter numbers to sort: 3,2,4,1
![flipSort-step1](https://user-images.githubusercontent.com/6191308/140782873-d54d2f9d-2598-49f3-982f-1e79350e7daf.png)

Step 2: Enter k value: 4
![flipSort-step2](https://user-images.githubusercontent.com/6191308/140783226-61612b28-f035-4eba-9c18-f1b7ab4beb0c.png)

Step 3: Repeat giving k value 2
![fliprSort-step3](https://user-images.githubusercontent.com/6191308/140783315-690391f5-022f-4ef4-9909-b882d6b72575.png)

Step 4: Repeat giving k value 4 then 3
![flipSort-step4](https://user-images.githubusercontent.com/6191308/140783422-f51c386d-29eb-4406-9465-4964f3332eea.png)

Step 5: Your Results
![flipSort-step5](https://user-images.githubusercontent.com/6191308/140783492-66519c3e-3e2b-4fc7-aa79-e53996357ad9.png)

### Fail Senario

![flipSort- failed](https://user-images.githubusercontent.com/6191308/140784365-d6677549-dc46-485c-bf89-f4ea9f79538b.png)

