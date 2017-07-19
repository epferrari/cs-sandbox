import bubbleSort from '../algos/bubbleSort';
import timer from '../utils/timer';
import unsorted from '../utils/unsorted';

const n = 1000000;
const rando = unsorted(n);

console.log(`Bubble sort array of ${n} randomly dispersed numbers from 0 - ${n}`);
timer.reset();
const b = bubbleSort(rando);
timer.log();
timer.reset();
const s = rando.sort();
timer.log();

if(b !== s) {
  throw 'Incorrect Sort';
}