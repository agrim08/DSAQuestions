var findPeakGrid = function(mat) {
    let n = mat.length;
    let m = mat[0].length;

    let left = 0, right = m - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // find max element row in mid column
        let maxRow = 0;
        for (let i = 0; i < n; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        let leftVal = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -1;
        let rightVal = mid + 1 < m ? mat[maxRow][mid + 1] : -1;

        if (mat[maxRow][mid] > leftVal && mat[maxRow][mid] > rightVal) {
            return [maxRow, mid]; // ✅ peak found
        }
        else if (leftVal > mat[maxRow][mid]) {
            right = mid - 1; // go left
        }
        else {
            left = mid + 1; // go right
        }
    }
};