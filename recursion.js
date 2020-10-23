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

console.log(findFactorialRecursive(5))

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

console.log(findFactorialIterative(5))
