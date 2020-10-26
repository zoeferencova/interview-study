// Bubble sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {
                // Swap numbers
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
}


// Selection sort

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i+1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// Insertion sort

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.ushift(array.splice(i, 1)[0])
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
}


// Merge sort

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


// Quick sort

function quickSort(array, left, right){
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);


// Interview exercise - which sorting algorithms to use

//#1 - Sort 10 schools around your house by distance:
// My answer: Insertion sort - small data size
// Solution: Insertion sort - fast, easy to code, space complexity O(1), could be nearly sorted

//#2 - eBay sorts listings by the current Bid amount:
// My answer: Quick sort - easy to find pivot
// Solution: Radix/counting - bid is usually number between 1-50k, fixed length of integers, beats O(n log(n)) time

//#3 - Sport scores on ESPN
// My answer: Quick/merge
// Solution: Quick sort - most efficient and worst case not likely, worried about in-memory sorting

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// My answer: Merge sort - memory issue
// Solution: Merge sort - can't sort in memory and want to avoid worst case in quick sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// My answer: Insertion sort - almost sorted
// Solution: Insertion sort - almost sorted

//#6 - Temperature Records for the past 50 years in Canada
// My answer: Quick sort - tons of data but pivot isn't hard to identify
// Solution: Radix/counting sort if no decimal places, quick sort if not

//#7 - Large user name database needs to be sorted. Data is very random.
// My answer: Quick sort
// Solution: Merge sort if we have enough memory or quick sort if not too worried about worst case

//#8 - You want to teach sorting for the first time
// My answer: Bubble sort
// Solution: Bubble sort/selection sort