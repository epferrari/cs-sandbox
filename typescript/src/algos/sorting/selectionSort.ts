export default function selectionSort(arr: number[]): number[] {
  let len: number = arr.length,
      i = 0,
      j: number,
      mi: number,
      temp: number;

  for(i; i < len; i++) {
    mi = i;
    for(j = i+1; j < len; j++) {
      if(arr[j] < arr[mi]) {
        mi = j;
      }
    }
    
    temp = arr[i];
    arr[i] = arr[mi];
    arr[mi] = temp;
  }
  return arr;
}