// needs to return an integer
// looks at the hourglass values at specified index and then creates a sum for those intervals
    // this will need to be a counter that holds the value of the highest hourglass sum
        // this also means that you'll need something that checks IF the current sum is greater than the previous sum stored in the variable
// there are only 4 sets across and 4 setst down, so there are 16 sums that we'll need to check
// we'll need to iterate through the array in an hourglass shape (what are those indeces?)

//pseudo code

// take the array and loop through the first hour glass and sum all the values at each hourglass index
// loop through the next hourglass and sum up those values -> if the new sum is greater than the previous hourglass sum, update the current sum with the new higher value
// continue these two steps until you've checked all the sums
// only spit out what the highest sum is (the current sum ammount)

// some sample input

const myArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

// what happens if it's a negative number? my if statement won't return anything since highestSum is greater than -6 in the secondArr instance

const secondArr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]

function hourglassSum(arr) {
  // -63 is the lowest number that the highestSum could be -> this case would be if all numbers were equal to -9 (one of the constraints is that there won't be any numbers less than -9 or greater than 9)
  // by starting it at -63, if the total is a greater negative number, it will still be considered greater than the highest sum and will update
  // if this started at 0, and your total is a negative number, you're output will be 0 since a negative number isn't greater than 0
  let highestSum = -63
  let total = 0
  for (let i = 0; i < arr.length - 2; i++){
    for (let j = 0; j < arr.length - 2; j++){
      let firstRow = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      let secondRow = arr[i + 1][j + 1]
      let thirdRow = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      total = firstRow + secondRow + thirdRow
      if (total > highestSum) {
        highestSum = total
      }
    }
  }
  return highestSum
}
