//recursive + memoization
var maxProductPath = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let memo = Array.from({ length: n }, () => new Array(m).fill(null));

    function dfs(i, j) {
        if (i >= n || j >= m) return [-Infinity, Infinity];
        if (i === n - 1 && j === m - 1) {
            return [grid[i][j], grid[i][j]];
        }

        if (memo[i][j] !== null) return memo[i][j];

        let val = grid[i][j];

        let [rightMax, rightMin] = dfs(i, j + 1);
        let [downMax, downMin] = dfs(i + 1, j);

        let tempArr = [];

        if (rightMax !== -Infinity || rightMin !== Infinity) {
            tempArr.push(val * rightMax, val * rightMin);
        }
        if (downMax !== -Infinity || downMin !== Infinity) {
            tempArr.push(val * downMax, val * downMin);
        }
        if (tempArr.length === 0) return [-Infinity, Infinity];

        let currMax = Math.max(...tempArr);
        let currMin = Math.min(...tempArr);

        memo[i][j] = [currMax, currMin];
        return memo[i][j];
    }

    let [maxProd] = dfs(0, 0);
    return maxProd < 0 ? -1 : maxProd % (1e9 + 7);
};


//tabulation
var maxProductPath = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    let maxDp = Array.from({ length: n }, () => new Array(m).fill(0));
    let minDp = Array.from({ length: n }, () => new Array(m).fill(0));

    maxDp[0][0] = grid[0][0];
    minDp[0][0] = grid[0][0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            if (i === 0 && j === 0) continue;

            let val = grid[i][j];

            let candidates = [];

            if (i > 0) {
                candidates.push(val * maxDp[i - 1][j]);
                candidates.push(val * minDp[i - 1][j]);
            }

            if (j > 0) {
                candidates.push(val * maxDp[i][j - 1]);
                candidates.push(val * minDp[i][j - 1]);
            }

            maxDp[i][j] = Math.max(...candidates);
            minDp[i][j] = Math.min(...candidates);
        }
    }

    let result = maxDp[n - 1][m - 1];

    if (result < 0) return -1;

    return result % (1e9 + 7);
};