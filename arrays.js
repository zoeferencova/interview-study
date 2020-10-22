// Building an array from scratch

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            // Replace what was there before with the value to the right
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();


// Interview questions

// 1. Create a function that reverses a string

function reverse(str) {
    const charArray = str.split("");
    const backwards = [];
    for (let i = charArray.length-1; i >= 0; i--) {
        backwards.push(charArray[i])
    }
    return backwards.join("")
}

function reverse2(str) {
    const backwards = []
    str.split("").map(char => backwards.unshift(char))
    return backwards.join("")
}

function reverseSolution(str) {
    // Should make a habit of checking inputs
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Error"
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        // Can access characters in a string as if they were in array
        backwards.push(str[i]);
    }

    return backwards.join("");
}

function reverseSolution2(str) {
    return str.split("").reverse().join("");
}

// Spread syntax allows for iterables to be spread into smaller bits,
// in this case it iterates through the string and spreads into individual characters

//Note: strings are iterable because they are ultimately saved as an array of chars in memory
const reverseSolution3 = str => [...str].reverse().join("");


// 2. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    if (!arr1 || !arr2 || typeof arr1 !== "object" || typeof arr2 !== "object") {
        return "Error"
    }

    const mergedArray = arr1.concat(arr2);
    return mergedArray.sort((a, b) => a - b);
}

function mergeSortedArrays2(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    for(let i = 0; i < mergedArray.length; i++) {
        if(mergedArray[i] > mergedArray[i+1]) {
            const temp = mergedArray[i];
            mergedArray[i] = mergedArray[i + 1];
            mergedArray[i+1] = temp;
        }
    }

    return mergedArray;
}

const mergeSortedArrays3 = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);

function solutionMergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array3;
    }

    while(array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
} 

