## Flip Sort CLI

# **A NodeS project to play Flip Sort**

## **Project Setup Guide**

### NodeJS Installation

Download and install Node.js from https://nodejs.org

### Clone the irdetoi-flipsort project

Clone the project into your local folder from https://github.com/cssam/irdetoi-flipsort

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

