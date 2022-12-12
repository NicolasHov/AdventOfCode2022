// Input from exercise :
// 30373
// 25512
// 65332
// 33549
// 35390

//TODO: parsing
// fn parse(input: String) -> Vec<&str> {
//     return input.split('\n').collect()
// }
fn main() {
    // Input that i formatted to be usable
    let wood = [
        [3, 0, 3, 7, 3],
        [2, 5, 5, 1, 2],
        [6, 5, 3, 3, 2],
        [3, 3, 5, 4, 9],
        [3, 5, 3, 9, 0],
    ];

    // create a table to store
    let mut memory = vec![];
    for i in wood {
        let mut line = vec![];
        for _ in i {
            line.push(false);
        }
        memory.push(line);
    }

    // left to right
    for i in 0..wood.len() {
        let mut max_height = wood[i][0];
        memory[i][0] = true;
        for j in 1..wood[i].len() {
            if wood[i][j] > max_height {
                max_height = wood[i][j];
                memory[i][j] = true;
            }
        }
    }

    // right to left
    for i in 0..wood.len() {
        let mut max_height = wood[i][wood[i].len() - 1];
        memory[i][wood[i].len() - 1] = true;
        // print!("\n{i}: {max_height} ");
        for j in (0..wood[i].len() - 1).rev() {
            if wood[i][j] > max_height {
                max_height = wood[i][j];
                // print!("{} ", max_height);
                memory[i][j] = true;
            }
        }
    }

    // top to bottom
    for i in 0..wood.len() {
        let mut max_height = wood[0][i];
        memory[0][i] = true;
        // print!("\n{i}: {max_height} ");
        for j in 1..wood[i].len() {
            if wood[j][i] > max_height {
                max_height = wood[j][i];
                // print!("{} ", max_height);
                memory[j][i] = true;
            }
        }
    }

    // bottom to top
    for i in (0..wood.len()).rev() {
        let mut max_height = wood[wood.len() - 1][i];
        memory[wood.len() - 1][i] = true;
        // print!("\n{i}: {max_height} ");
        for j in (0..wood[i].len()).rev() {
            if wood[j][i] > max_height {
                max_height = wood[j][i];
                // print!("{} ", max_height);
                memory[j][i] = true;
            }
        }
    }

    for line in memory {
        let num_tree_visible: Vec<bool> = line
        .into_iter()
        .filter(|b| *b)
        .collect::<Vec<bool>>();
       
        let sum = num_tree_visible.into_iter().flat_map(|x| x).collect();
        // let sum = num_tree_visible.into_iter().collect::<Vec<bool>>().sum();
    }
}
