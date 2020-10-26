function countingValleys(steps, path) {
    // traverse through the string and check if it's a 'U' or a 'D'
    // if it's a 'D' you're going down in elevation, so elevation needs to decrement
    // if it's a 'U' you're going up in elevation, so eelevations needs to increment
    // if elevation is = -1 and you have more steps left, you need to increment vallyes
    let valleys = 0
    let elevation = 0
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'D') {
            elevation--
        } else {
            if (elevation == -1) {
                valleys++
            }
            elevation++
        }
    }
    return valleys
}

// link to problem here: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
