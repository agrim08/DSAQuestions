var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    let row = 0;
    let col = m - 1;

    while (row < n && col >= 0) {
        let val = matrix[row][col];

        if (val === target) return true;
        else if (val > target) col--;   // eliminate column
        else row++;                     // eliminate row
    }

    return false;
};