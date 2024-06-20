const array: string[] = ["apple", "banana", "cherry", "date"];
function filterStringByLength(
  array: string[],
  minLength: number
): string[] | number {
  return array.filter((String) => String.length > minLength);
}
console.log(filterStringByLength(array, 4));

// class puzzle 2

const words: string[] = ["hello", "world", "JavaScript", "coding"];
function filterWordsByLetter(arr: string[], letter: string): string[] {
  return arr.filter(elm => elm.includes(letter));
}
console.log(filterWordsByLetter(words, "o"));

