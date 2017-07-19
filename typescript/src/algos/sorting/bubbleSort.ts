
export default function bubbleSort<T>(arr: T[]): T[] {
  let i, j, a, b, 
      len = arr.length,
      swaps;
  while(len--) {
    swaps = false;
    for(j = 0; j < len; j++) {
      if((a = arr[j]) > (b = arr[j + 1])) {
        arr[j] = b;
        arr[j + 1] = a;
        swaps = true;
      }
    }
    if(!swaps) break;
  }
  return arr;
}
