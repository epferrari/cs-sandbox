import timer from '../utils/timer';
import unsorted from '../utils/unsorted';
import {Sorter} from '../algos/sorting';

export default function sortingBenchmark(name: string, sorter: Sorter, n = 10000): void {
  const rando = unsorted(n);

  console.log(`Using ${name} to sort array of ${n} randomly dispersed numbers from 0 - ${n}`);
  timer.reset();
  const b = sorter(rando.slice());
  timer.log();
  timer.reset();
  const s = rando.slice().sort((a, b) => (a - b));
  timer.log();

  if(n < 50) {
    console.log('algo', b.join(' '));
    console.log('native', s.join(' '));
  }
  
  if (!b.every((item, index) => (item == s[index]))) {
    throw 'Algorithm did not successfully sort';
  }
}
