// 1.
// you're given an array of integers and you're meant to rotate the numbers to the end of the array 'd' times
// the valid input is an array of 'n' length
// 2.
// d represents the number of rotations - so for example if d is 2 then you need to rotate twice
// if you're given an array such as [1, 2, 3, 4, 5] and d is 4, then you should end up with something like this:
// first rotation: [2, 3, 4, 5, 1]
// second rotation: [3, 4, 5, 1, 2]
// third rotation: [4, 5, 1, 2, 3]
// fourth rotation: [5, 1, 2, 3, 4]
// 3.
// so we need to take the first number in the array and move it to the back
// we need to keep track of how many more times we need to move the first number to the back - can decrement 'd' until it's zero
// so while 'd' is still greater than 0, remove the first number in the array and move it to the back of the array
// arr: [1, 2, 3, 4, 5]
// d: 4
// first rotation:
// new arr is: [2, 3, 4, 5, 1]
// d now is: 3
// etc
// 5.
// can we use method chaining?

const myArr = [1, 2, 3, 4, 5]

function rotLeft(a, d) {
  while (d > 0) {
    let remInt = a.shift()
    a.push(remInt)
    d--
  }
  return a
}
