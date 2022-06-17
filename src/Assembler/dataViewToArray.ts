export function dataViewToArray(array: DataView) {
  const acc: number[] = [];
  for (let index = 0; index < array.byteLength; index++) {
    const element = array.getUint8(index);
    acc.push(element);
  }
  return acc;
}
