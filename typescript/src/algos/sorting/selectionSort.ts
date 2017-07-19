export default function selectionSort<T>(arr: T[]): T[] {
  let len = arr.length, i, j, k, m, min, minIndex;
  for(i = 0; i < len; i++) {
    min = arr[i], minIndex = i;
    for(j = i, k = len - j, m = j + 1; j < k; j++) {
      if(arr[m] < min) {
        min = arr[m];
        minIndex = m;
      }
    }
    console.log('min', min);
    let temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
  }
  return arr;
}