function jumpingOnClouds(c) {
    // a place to store the number of jumps Emma has made
    let jumps = 0
    // the current index
    let i = 0
    // use a while loop to loop over the length of the c array
    while (i < c.length - 1) {
        // if the index + 2 is still within the array (aka less than the length)
        // and the value of c[i+2] is equal to 0, you can skip the clouds
        // since i starts at 0 outside of the while loop, you can check
        // to see if you can jump by two
        if (i + 2 < c.length && c[i+2]==0) {
            i += 2
            jumps++
        // if you can't jump by two, then jump by one
        } else {
            i += 1
            jumps++
        }
    }
    return jumps
}
