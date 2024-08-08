export default function appendToEachArrayValue(array, appendString) {
  if (array && array.length > 0) {
    return array.map((value) => appendString + value);
  }

  return array;
}
