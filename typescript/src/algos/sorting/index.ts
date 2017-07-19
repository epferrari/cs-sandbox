import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';

export {
  bubbleSort,
  selectionSort
};

export type Sorter = (arr: number[]) => number[];