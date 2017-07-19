
export default function bubbleSort<T>(arr: T[]): T[] {
  let j, k, a, b, 
      len = arr.length,
      swaps;
  while(len--) {
    swaps = false;
    for(j = 0, k = j + 1; j < len; j++) {
      if((a = arr[j]) > (b = arr[k])) {
        arr[j] = b;
        arr[k] = a;
        swaps = true;
      }
    }
    if(!swaps) break;
  }
  return arr;
}
