/**
 * Determines whether the given Set has all the values from the given array.
 *
 * {Set} set - The Set to check
 * {Array} array - The array of values to check for
 * return {boolean} True if the Set has all the values from the array,
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
