const { log } = require("console")

// parsing
const input = require("fs")
    .readFileSync(0, { encoding: "utf-8" })

const SIZE = 14

const isAllDifferents = arr => [...new Set(arr)].length === SIZE

const solve = x => { for (let i = 0; true; i++) if (isAllDifferents(x.slice(i, i + SIZE))) return i + SIZE }

console.log(solve(input))