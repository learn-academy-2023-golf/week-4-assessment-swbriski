// This file was created to test the legitimacy of the code created for the first problem of the coding challenge. I initially passed the test, but I couldn't tell if my code was actually shuffling the values in the array. After running the code in the terminal through this file, it became apparent that my code was only removing the first value of the array.
// After much trial and error through this file, I was able to create a code that satisfied the conditions of the prompt.
// This code passes the test created in the test file.

// Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Pseudo code:
// input: array
// output: shuffled array without first value

const shuffledSubset = (array) => {
    // Use .shift to remove first value in the array
    array.shift()

    // This array will hold the randomly selected values
    var shuffledArray = []
    
    // This array is for transferring values to and from the modified (shifted) array
    var temporaryArray = []

    // Shuffle remaining values in the modified array
    for (let i = array.length; i > 0; i = i - 1) {
        // Generate a random index from the array
        let randomIndex = Math.floor(Math.random() * i)
        // Add the randomly selected value to the shuffled array
        shuffledArray.push(array[randomIndex])

        // Transfer values from modified array to the temporary array
        for (let i = array.length - 1; i > randomIndex; i = i - 1) {
            temporaryArray.push(array[i])
            array.pop()
            }

        // Remove the randomly selected value from the array so it will not be selected again
        array.pop()

        // Transfer the values from the temporary array back into the modified array
        for (let i = temporaryArray.length - 1; i >= 0; i = i - 1) {
            array.push(temporaryArray[i])
            temporaryArray.pop()
        }
    }
    return shuffledArray
}

console.log(shuffledSubset(colors1))
console.log(shuffledSubset(colors2))