function findKthMinimum(matrix, k) {
    let n = matrix.length

    function countSmaller(x) {
        let row = n - 1
        let col = 0
        let count = 0

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= x) {
                count += row + 1
                col++
            }
            else {
                row--
            }
        }

        return count
    }

    let low = matrix[0][0]
    let high = matrix[n - 1][n - 1]

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)

        if (countSmaller(mid) < k) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }

    return low
}