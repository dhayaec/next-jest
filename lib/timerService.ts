export function delayFunction(callback: () => void, delay: number): void {
  setTimeout(callback, delay);
}
