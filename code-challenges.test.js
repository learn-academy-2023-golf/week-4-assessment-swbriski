// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe ("shuffledSubset", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
        expect(shuffledSubset(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffledSubset(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// b) Create the function that makes the test pass.

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

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe ("endTally", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect(endTally(votes1)).toEqual(11)
        expect(endTally(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input: object
// output: number
// use Object.value to create array: [upVotes, downVotes]

const endTally = (object) => {
    return Object.values(object)[0] - Object.values(object)[1]
}