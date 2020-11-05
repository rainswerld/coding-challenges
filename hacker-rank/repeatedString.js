function repeatedString(s, n) {
    // determine how many times the substring can go into n
    const subStr = Math.floor(n / s.length)
    // determine how many a's are in the substring
    const allAs = (s.match(/a/g) || []).length
    // determine the remainder of characters
    const remainder = n % s.length
    // determine how many a's are in the remainder
    const aRemainder = s
        // split at each character
        .split('')
        // returns an array that's at the beginning until the remainder index
        .splice(0, remainder)
        // filter to get only the a's
        .filter((e) => e === 'a').length

    // if the remainder of the string going into n is 0
    if (n % s.length === 0) {
        // n / s.length will be a whole integer and you multiple that by the number of a's in s
        return (n / s.length) * allAs
    // otherwise
    } else {
        // multiple the whole amount of times that s can go into n by the number of a's in s and add the amount of remaining a's
        return subStr * allAs + aRemainder
    }
}
