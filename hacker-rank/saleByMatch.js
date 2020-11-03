function sockMerchant(n, ar) {
    // first you want to sort the array so that you can compare one element in the array to its neighbor
    const sorted = ar.sort((a, b) => a - b)
    let pairs = 0
    // then you need to loop through the sorted array and compare one element to the next
    for (let i = 0; i < ar.length - 1; i++) {
        // if the current element is equal to the next, increase our pairs counter
        if (sorted[i] === sorted[i + 1]) {
            pairs++
            // increase the index to skip the two pairs you just compared
            i += 1
        }
    }

    return pairs
}
