/**
 * Instead of flowing water from each cell to the oceans, we reverse the process.
 * Start DFS from both oceans and move only to equal or higher height cells (uphill).
 * Cells reachable from both Pacific and Atlantic are the answer.
 */

var pacificAtlantic = function (heights) {
    const m = heights.length
    const n = heights[0].length

    const pacific = Array.from({ length: m }, () => Array(n).fill(false))
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false))

    const dfs = (r, c, visited, prevH) => {
        //out of bound
        if (r < 0 || c < 0 || r >= m || c >= n) return

        //already marked
        if (visited[r][c]) return

        //less height
        if (heights[r][c] < prevH) return

        visited[r][c] = true

        // down
        dfs(r + 1, c, visited, heights[r][c])
        // up
        dfs(r - 1, c, visited, heights[r][c])
        // right
        dfs(r, c + 1, visited, heights[r][c])
        // left
        dfs(r, c - 1, visited, heights[r][c])
    }

    // Pacific (top row)
    for (let c = 0; c < n; c++) {
        dfs(0, c, pacific, heights[0][c])
    }

    // Pacific (left column)
    for (let r = 0; r < m; r++) {
        dfs(r, 0, pacific, heights[r][0])
    }

    // Atlantic (bottom row)
    for (let c = 0; c < n; c++) {
        dfs(m - 1, c, atlantic, heights[m - 1][c])
    }

    // Atlantic (right column)
    for (let r = 0; r < m; r++) {
        dfs(r, n - 1, atlantic, heights[r][n - 1])
    }

    //intersection
    const result = []
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c])
            }
        }
    }

    return result
};