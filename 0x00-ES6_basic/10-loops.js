export default function appendToEachArrayValue(array, appendString) {
  if (array && array.length > 0) {
    for (const [idx, value] of array.entries()) {
      array[idx] = appendString + value;
    }
  }

  return array;
}
