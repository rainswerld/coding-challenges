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

// 1. each sub array contains the amount of wealth a customer has
// 2. for example, accounts = [[1, 2, 3], [3, 2, 1]] where each sub array has the total value of the customer's wealth when summed
// the first customer has wealth = 1 + 2 + 3 = 6
// the second customer has wealth = 3 + 2 + 1 = 6
// both customers are considered the wealthiest since they both have 6
// another example would be:
// accounts = [[1,5],[7,3],[3,5]]
// the first customer has wealth 1 + 5 = 6
// the second customer has wealth 7 + 3 = 10
// the third customer has wealth 3 + 5 = 8
// therefore the second customer is the welathiest
// 3.
// so you need to access the first sub array and sum the total of that array
// then you need to store that value has the welathiest person because that's the highest number we've seen thus far
// then you need to access the next sub array and sum the total of that
// you need to check and see if the sum of the current array is greater than the previously stored welathiest number
// if the current sum is greater, replace the old sum, if it's less, keep the old sum
// after you've gone through all the arrays, summed & checked them again each other, then return the stored value as it will be the highest array
// 4. for example:
// accounts = [[2,8,7],[7,1,3],[1,9,5]]
// so you need to loop through & sum accounts[i] which is the first customer
// then you need to sum all of the numbers in that array
// 2 + 8 + 7 = 17
// 17 then needs to be stored in a variable, we'll call it wealthiest
// wealthiest now = 17
// then we need to loop through & sum accounts[i + 1] and sum the values in that array
// 7 + 1 + 3 = 11
// check to see if 11 is > 17, it's not so wealthiest still = 17
// then we need to loop through & sum accounts[i + 2]
// 1 + 9 + 5 = 15
// check to see if 15 > 17, it's not so wealthiest is still = 17
// so the welathiest customer is the first with 17
const accounting = [[2,8,7],[7,1,3],[1,9,5]]
const accounts2 = [[1,5],[7,3],[3,5]]

var maximumWealth = function(accounts) {
  let wealthiest = 0
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts.length; j++) {
      const reducer = (acc, currVal) => acc + currVal
      let sum = accounts[i].reduce(reducer)
      if (sum > wealthiest) {
        wealthiest = sum
      }
    }
  }
  return wealthiest
};
