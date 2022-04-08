# Coding test

To complete the test you have to answer,

1. Problem 1
2. Problem 2 or 3

## Problem 1 - Flip sort

Given an array of integers arr, sort the array by performing a series of flips.

In one flip we do the following steps:

Choose an integer k where 1 <= k <= arr.length.
Reverse the sub-array arr[1...k].
For example, if arr = [3,2,1,4] and we performed a flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the flip at k = 3.

Return the k-values corresponding to a sequence of flips that sort arr. Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.

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
var flipSort = function(arr) {
}
```

## Problem 2 - Simple React application

Here we ask you to be a bit creative. Create a simple but fullly functional weather application using ReactJS,

- https://reactjs.org/

and optionnaly Redux,

- https://redux.js.org/

Using the following free API,

https://openweathermap.org/current

create an application that accepts a city as an input and display the current weather in the same page.

The page must allow a user to select and change the city.

The page must refresh automatically, but not too often.

Again, be creative!

## Problem 3 - Web API

Write a server (or Serverless) that implenents a simple RESTful Web API. You can use the language and framework of your choice (Node/Express, Java/Springboot, Python/Flask, or other similar). It is a API that allows to keep track of notes. Each note has the following JSON format,

```json
{
  "id": 0,
  "title": "Note to self",
  "description": "Take out the garbage",
  "when": 1624631009
}
```

where `when` is a Unix Epoch time.

The API must implement the following routes,

```text
GET /notes

to return a list of all the notes.
```

```text
GET /notes/{id}

to only return the note with `id`={id}
```

```text
POST /notes

to create a new note.
```
