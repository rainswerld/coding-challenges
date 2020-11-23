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
// so it sounds like the array will be out of order and we need to figure out how it got to the out of order state it's in by dfetermining how many bribes occured
// you want to return an integer that represents the minimum number of bribes
// if the configuration is not possible, you must return the string 'Too chaotic'
// one person can only bribe twice -> so that means an integer can only be 2 places off from the original
// you won't want to move backwars in the array, so you really only need to check if they've moved forward
// q is the array
// so you take in that array and determine how many bribes have occurred
// but also check if there are too many bribes for the 2 bribe limit

// 2.
// you're given an array like:
const myArr = [2, 1, 5, 3, 4]
// in this array, there are 3 bribes total and they are as follows:
// 2 bribed 1 to move up
// 5 bribed 4 and then 3 to move up

// 3.
// you could check to see if arr[i] > then arr[i + 1] and if that's the case, a bribe has occured
// then the remainder of arr[i] - arr[i + 1] will tell you how many bribes occurred
// if that remainder is greater than 2, there were more than 2 bribes and it's 'Too Chaotic'
// if that number is equal to or less than 2, then you have to count that as a bribe
// so you need something that keeps track of the bribes as well

// 4.
// so if you have the array above
// myArr[0] is 2 and myArr[1] is 1
// if you do 2 - 1, you get 1 which means 1 bribe occurred
// myArr[2] is 5 and myArr[3] is 3
// if you do 5 - 3, you get 2 which means 2 bribes occurred

// say you're given this array:
const secArr = [2, 5, 1, 3, 4]
// secArr[0] is 2 and secArr[1] is 5
// if you do 2 - 5, you get -3
// secArr[1] is 5 and secArr[2] is 1
// if you do 5 - 1, you get 4 which menas 4 bribes occurred

// say you're given this array
const anArr = [3, 2, 5, 4, 1]
// 3 - 1 = 1
// 2 - 5 = -3
// 5 - 4 = 1
// 4 - 1 = -3

// the input actually looks something like this:
// 2
// 5
// [2, 1, 5, 3, 4]

function minimumBribes(q) {
  let bribes = 0
  let remainder = 0
  for (let i = 0; i < q.length; i++){
    if (q[i] > q[i + 1]) {
      remainder = q[i] - q[i + 1]
      bribes += remainder
      if (remainder > 2) {
        return 'Too chaotic'
      }
    }
  }
  return bribes
}
