function ArrayChallenge(arr) {
  // get the sum of the array
  const sum = arr.reduce((a, b) => a + b, 0)
  // track highest integer in array
  let highest = 0
  // track second highest interval in array
  let nextHighest = 0
  // loop through all integers in the array
  for (let i = 0; i < arr.length; i++) {
    // if the current integer in the array is the highest
    if (arr[i] > highest) {
      // move the current highest value to the next highest value
      nextHighest = highest
      // set the highest value to the current integer
      highest = arr[i]
    // else if the current value is bigger than the next highest but not bigger than the highest
    } else if (arr[i] > nextHighest) {
      // set the next highest to the current integer
      nextHighest = arr[i]
      // keep going in all other instances
    } else {
      continue
    }
  }
  // multiply the final highest value to the next highest value
  let multiply = highest * nextHighest
  // check to see if the multiplied numbers are greater than the sum
  if (multiply > sum) {
    // if they are return true
    return 'true'
  // otherwise return false
  } else {
    return 'false'
  }
}

// keep this function call here
console.log(ArrayChallenge(readline()));
