// parsing
const input = require("fs")
    .readFileSync(0, { encoding: "utf-8" })
    .split("\n")
    .map((x) => x.split(" "));

const scores = {
    A: { X: 3 + 0, Y: 1 + 3, Z: 2 + 6 },
    B: { X: 1 + 0, Y: 2 + 3, Z: 3 + 6 },
    C: { X: 2 + 0, Y: 3 + 3, Z: 1 + 6 },
};

const solve = (input) =>
    input.map(tab => scores[tab[0]][tab[1]]).reduce((a, b) => a + b, 0);

console.log(solve(input));
// console.error(y)
