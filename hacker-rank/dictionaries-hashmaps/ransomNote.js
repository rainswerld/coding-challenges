// 1. Understand the problem
// - Read it, reread it
// Ask Clarifying Questions about the problem
// - Whats valid input? Whats Not Valid input ?
// - Do I neeed to worry about X, Y , Z
// 2. Test Inputs
// - This will make sure you actually do understand the problem
// - Because sometimes the Output is not what you expect
// - And it gives you another example input to test later
// 3. <<Pseudocode>>
// - I mean Literally, solve the problem in plain english
// - Write out in plain english your "Algorithm"
// - Write out LITERALLY ALL OF THE SOLUTION or ALGORITHM
// 4. TEST OUT YOUR #3, WITH YOUR #2
// 5. Write the code
// 10 mins
// Translate words into code
// 6. TEST your CODE

// 1.
// we're dealing with key value pairs here seeing if one array has the same key value pairs as another array
// that means we'll want a JS object to represent the 'dictionary'
// we'll want to know how many times the word appears in the magazine and how many times the word appears in the ransom note and decrement the word from the magazine
// 2.
const mag = ['give', 'me', 'one', 'grand', 'today', 'tonight']

const ransom = ['give', 'one', 'grand', 'today']

// so we want to be able to count the occurance of words in the mag array
// so everytime a new word is encountered, a new key value pair should be built with the value representing the amount of times that words appears
// the key will be the word
// you can then loop over the ransom array and check if the word at index[i] is equal to any of the keys in the dictionary/hash table
// if there is at any point a word that appears in the ransom but not the mag, we should exit the loop and return 'No'
// otherwise keep going
// if we're able to go through successfully with no problems, we want to return 'Yes'

// this one worked in only some test cases
function checkMagazine(magazine, note) {
  // this creates the empty hash table to store the key value pairs
  const words = {}
  // this goes through each word in the magainez and creates a key value pair in the hashtable words
  magazine.forEach((word) => {
    // you need to initialize the key value pair with 0 or else it will return NaN
    // the || operator here initializes the key value pair at zero and lets you count from there by 1
    words[word] = (words[word] || 0) + 1
  })

  // now we need to loop throug the note array and check to see if the current value of woird[i] is equal to a word in the hash table
  for (let i = 0; i < note.length; i++) {
    const word = note[i]
    // if the word doesn't exist or if the value at the hash table is less than 1, return 'No' because you need at least one in the dictionary and one in the note for you to be able to write the note
    if (!words[word] || words[word] < 1) {
      return 'No'
    }
    // otherwise decrement the word count by one (this solves the edge case of if you need more than one oocurance of the same word but the magazine doesn't have more than one)
    words[word] =- 1
  }
  return 'Yes'
}

// alternate version using map
// this one worked in all test cases
function checkMagazine(magazine, note) {
  const map = {}
  let replicable = true
  for (const i of magazine) {
    map[i] = (map[i] || 0) + 1
  }
  for (const i of note) {
    map[i] = (map[i] || 0) - 1
  }
  for (const i in map) {
    if (map[i] < 0) {
      replicable = false
      break
    }
  }
  return (replicable ? 'Yes' : 'No')
}
