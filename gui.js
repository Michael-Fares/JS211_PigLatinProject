// the broswer console kept throwing reference errors when I tried to link the main.js to the html. It kept saying 'require' to do with the unit testing was not defined. So I pulled only my pig latin function in to a separate js file and linked. Sorry for confusion!

const pigLatin = (word) => {
  // Your code here

  // set value of the input to the value of the word argument in the function
word = document.getElementById('word').value 
word = word.trim().toLowerCase();
const wordArr = word.split('')
const regEx = /['aeiou']/

// if the first letter of the word matches any vowel (the regular expression aeiou) add yay to the end of the word
if (wordArr[0].match(regEx)) {
    document.getElementById('pig-latin').innerText = word + 'yay'
} else {
  // find the index of the first vowel in the word 
  const vowelIndex = word.search(regEx)
  // slice off the consonants before that first vowel, and store them in a variable
  const firstConsonnants = word.slice(0, vowelIndex)
  // slice off the rest of the word from the vowel index until the end
  const restOfWord = word.slice(vowelIndex, word.length)
  // add the first consonnants to the rest of the word, and then add ay
  document.getElementById('pig-latin').innerText =  restOfWord + firstConsonnants + 'ay'
}
}