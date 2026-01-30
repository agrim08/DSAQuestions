/**
 * Approach: Frequency Array / Hash Set.
 * Intuitively, we know the sum and squares of numbers from 1 to N^2. By 
 * counting occurrences of each number in the grid, we can identify which 
 * number appeared twice and which number never appeared.
 */
var findMissingAndRepeatedValues = function(grid) {
    let repeat = -1
    let missing = -1
    let n = grid.length
    let s = new Set()

    for(let i =0; i < n; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(s.has(grid[i][j])){
                repeat = grid[i][j]
            }
            else{
                s.add(grid[i][j])
            }
        }
    }

    for(let i = 1; i <= n * n; i++){
        if(!s.has(i)){
            missing = i
        }
    }

    return [repeat, missing]
};


//Approach 2:
var findMissingAndRepeatedValues = function(grid) {
    let repeat = -1
    let missing = -1
    let n = grid.length
    let total = n * n
    let freq = new Array(total + 1).fill(0);

    for(let i = 0; i < n; i++){
        for(let j = 0; j < grid[0].length; j++){
            freq[grid[i][j]]++
        }
    }

    for(let i = 1; i <= total; i++){
        if(freq[i] === 2){
            repeat = i
        }
        if(freq[i] === 0){
            missing = i
        }
    }

    return [repeat, missing]
};