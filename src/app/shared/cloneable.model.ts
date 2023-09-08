export interface Cloneable<T> {
  cloneNaive(): T;
  cloneJSON(): T;
  cloneSpread(): T;
  cloneTrue(): T;
}