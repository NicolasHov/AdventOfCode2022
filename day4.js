
// parsing
const input = require("fs")
    .readFileSync(0, { encoding: "utf-8" })
    .split("\n")
    .map((x) => x.split(",")
        .map((x) => x.split("-")
            .map(x => parseInt(x))
        )
    )


const containOtherRange = (arr1, arr2) => {
    return ((arr1[0] <= arr2[0]) && (arr1[1] >= arr2[1])) || ((arr1[0] >= arr2[0]) && (arr1[1] <= arr2[1])) ? true : false
}

const isOverlap = (arr1, arr2) => {
    return ((arr1[0] <= arr2[0]) && (arr1[1] >= arr2[0]) || ((arr1[0] <= arr2[1]) && (arr1[1] >= arr2[1])) || containOtherRange(arr1, arr2)) ? true : false
}

const solve = input => {
    let sum = 0
    input.map(x => {
        // sum += 1 * containOtherRange(x[0], x[1]);
        sum += 1 * isOverlap(x[0], x[1]);

    })
    return sum
}

console.log(solve(input))