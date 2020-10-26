// Write two functions that find the factorial of any number
// One should use recursion and the other should use a for loop

// E.g. 5! = 5 * 4 * 3 * 2 * 1

// O(n)
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number-1);
}

// O(n)
function findFactorialIterative(number) {
    let answer = 1;

    if (number === 2) {
        answer = 2;
    }

    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }

    return answer;
}


// Given an index N, return the index value of the Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// Each number is sum of 2 previous values

//O(n)
function fibonacciIterative(n) {
    let arr = [0, 1]
    
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }

    return arr[n];
}

// console.log(fibonacciIterative(3));
// Answer: 2

// O(2^n)
function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}


//Implement a function that reverses a string using recursion
//O(n)
function reverseString(str) {

    if (str === "") {
      return "";
    }
  
    return reverseString(str.substr(1)) + str.charAt(0)
  }


// Find the greatest common divisor (gcd) of two positive numbers

function findGcd(num1, num2) {
    // Since num2 is the remainder, remainder 0 signifies
    // that the first common denominator was found
    // in which case num1 represents that first common denominator
    if (num2 === 0) {
        return num1;
    }

    return findGcd(num2, num1 % num2)
}

// console.log(findGcd(1701, 3768))
// Answer: 3


// Get the integers in range (x, y)

function intRange(x, y) {
    // if there is only one more number between x and y
    // add remaining number into array and return array
    if (y - x === 2) {
        return [x + 1];
    }

    // sets returned array from base case to var
    // changes max number to one less each time
    const arr = intRange(x, y - 1);

    // pushes next lowest number to end of array
    arr.push(y - 1);
    return arr;
}

// console.log(intRange(2, 9))
// Answer: [3, 4, 5, 6, 7, 8]

// Compute the sum of an array of integers

function sum(array) {
    if (array.length === 1) {
        return array[0]
    }

    // Replace first 2 items with sum of first 2 items
    array.splice(0, 2, array[0]+array[1])

    return sum(array)
}

function sum2(array) {
    if (array.length === 1) {
        return array[0]
    }

    // Remove last item and add to array with last item missing
    return array.pop() + sum2(array)
}

// console.log(sum2([1, 2, 3, 4]))
// Answer: 10

// Compute the exponent of a number

function getResult(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * getResult(base, exponent-1)
}

// console.log(getResult(3, 3))
// Answer: 27


// Check whether a number is even or not

function isEven(num) {
    if (num < 0) {
        num = Math.abs(num);
    }

    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    num = num-2;
    return isEven(num);
}

