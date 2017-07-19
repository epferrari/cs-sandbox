import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';

export {
  bubbleSort,
  selectionSort
};

export type Sorter = <T>(arr: T[]) => T[];