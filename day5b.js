
// parsing
const input2 = require("fs")
    .readFileSync(0, { encoding: "utf-8" })
    .split("\n")
    .map((x) => {
        return x.match(/\b(\w+)\b/g)
    })
    .map((x) => {
        return [parseInt(x[1]), parseInt(x[3]) - 1, parseInt(x[5]) - 1]
    })

const cargo = [
"DTRBJLWG",
"SWC",
"RZTM",
"DTCHSPV",
"GPTLDZ",
"FBRZJQCD",
"SBDJMFTR",
"LHRDTVM",
"QPDSV"
].map(x => x.split(''))

// G]                 [D] [R]        
// [W]         [V]     [C] [T] [M]    
// [L]         [P] [Z] [Q] [F] [V]    
// [J]         [S] [D] [J] [M] [T] [V]
// [B]     [M] [H] [L] [Z] [J] [B] [S]
// [R] [C] [T] [C] [T] [R] [D] [R] [D]
// [T] [W] [Z] [T] [P] [B] [B] [H] [P]
// [D] [S] [R] [D] [G] [F] [S] [L] [Q]

// solving
const solve = (cargo, moves) => {
    // console.log(moves);
    for (let i = 0; i < moves.length; i++) {
        const [N, start, end] = moves[i]
        const x = cargo[start].length - N
        const moved = cargo[start].slice(x)
        
        cargo[start] = cargo[start].slice(0,x)
        cargo[end] = cargo[end].concat(moved)

    }
    return cargo.map(x => x.pop()).join("")
}

console.log(solve(cargo, input2))