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
const strOne = ['hello', 'world']
const strTwo = ['hi', 'world']

function twoStrings(s1, s2) {
  // initialize a hash map to keep track of all the characters
  const sameLetters = {}
  for (let i = 0; i < s1.length; i++) {
    const strLetter = s1[i]
    sameLetters[strLetter] = true
  }
  for (let i = 0; i < s2.length; i++) {
    const str2Letter = s2[i]
    if (sameLetters[str2Letter]) {
      return 'YES'
    }
  }
  console.log(sameLetters)
  return 'NO'
}
