function mergeSort(arr) {
  if (arr.length > 1) {
    let chunk1 = mergeSort(arr.slice(0, arr.length / 2));
    let chunk2 = mergeSort(arr.slice(arr.length / 2, arr.length));
    return merge(chunk1, chunk2);
  }
  return arr;
}

function merge(a, b) {
  let i = 0,
    j = 0,
    k = 0;
  let c = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++];
    }
  }
  while (i < a.length) {
    c[k++] = a[i++];
  }
  while (j < b.length) {
    c[k++] = b[j++];
  }
  return c;
}

console.log(mergeSort([9, 3, 7, 5, 6, 4, 2]));

// Thanks Abdul Bari for the GREAT Explanation!
//https://www.youtube.com/watch?v=6pV2IF0fgKY
//https://www.youtube.com/watch?v=mB5HXBb_HY8
