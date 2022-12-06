// parsing
const input = require("fs")
    .readFileSync(0, { encoding: "utf-8" })
    .split("\n")

    // TIPS: solution estde conplexite O(n^2), on aurait pu stocker les lettres de la premiere chaine puis les comparer une a une
const getCommonLetter = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                return str1[i]
            }
        }
    }
}

const getScoreLetter = letter => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet.indexOf(letter) + 1
}

const solve = (input) => {
    return input.map(x => {
        let halfLength = Math.ceil(x.length / 2);
        let leftSide = x.slice(0, halfLength);
        let rightSide = x.slice(halfLength);
        return getScoreLetter(getCommonLetter(leftSide, rightSide))
    })
        .reduce((prev, next) => prev + next)
}

console.log(solve(input))
