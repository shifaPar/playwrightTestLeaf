let word = '';
let words = [];
let inWord = false;
function stringremovespaces(string1){
for (let i = 0; i < string1.length; i++) {
  let char = string1[i];
  if (char !== ' ') {
    word += char;
    inWord = true;
  } else {
    if (inWord) {
      words.push(word);
      word = '';
      inWord = false;
    }
  }
}
// Push the last word if it wasn't added yet
if (word !== '') {
  words.push(word);
}
// Get the length of the last word
let lastWordLength = words[words.length - 1].length;
console.log(lastWordLength);  // Output: 9
}
let string1 = " Learn Playwright to remove unwanted spaces   ";
stringremovespaces(string1)

function checkAnagram(string2,string3){
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = string2.replace(/\W/g, '').toLowerCase();
    const cleanStr2 = string3.replace(/\W/g, '').toLowerCase();
    // If lengths don't match, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
    return false;
    }
    // Sort the characters and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(checkAnagram("hello","world"));