export default function iterateThroughObject(reportWithIterator) {
  // Create an array from the iterator, then join the elements with " | "
  return [...reportWithIterator].join(' | ');
}
