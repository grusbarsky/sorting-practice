/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
    
      // We are assuming the pivot is always the first element
      let pivot = arr[start];
      let swapIdx = start;
    
      for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
    
      // Swap the pivot from the start the swapPoint
      swap(arr, start, swapIdx);
      return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
      }
      return arr;
}

module.exports = quickSort;