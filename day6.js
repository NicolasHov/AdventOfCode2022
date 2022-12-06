const { log } = require("console")

// Parsing
const input = require("fs")
    .readFileSync(0, { encoding: "utf-8" })

// Game constants
const SIZE = 14

// Solving
const isAllDifferents = arr => [...new Set(arr)].length === SIZE

const solve = x => { for (let i = 0; true; i++) if (isAllDifferents(x.slice(i, i + SIZE))) return i + SIZE }

console.log(solve(input))