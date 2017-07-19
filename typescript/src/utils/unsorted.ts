export default function unsorted(n: number): number[] {
  return new Array(n)
  .fill(1)
  .map(x => Math.floor(Math.random() * n));
}
