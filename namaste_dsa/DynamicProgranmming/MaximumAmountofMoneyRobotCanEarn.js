var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;

    // 3D DP array initialized with -Infinity (JS equivalent of Integer.MIN_VALUE)
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(3).fill(-Infinity)
        )
    );

    function solve(i, j, neu) {
        // Out of bounds
        if (i >= m || j >= n) return -Infinity;

        // Base case
        if (i === m - 1 && j === n - 1) {
            if (coins[i][j] < 0 && neu > 0) return 0;
            return coins[i][j];
        }

        // Memo
        if (dp[i][j][neu] !== -Infinity) {
            return dp[i][j][neu];
        }

        let best = -Infinity;

        // Move Down
        const down = solve(i + 1, j, neu);
        if (down !== -Infinity) {
            best = Math.max(best, coins[i][j] + down);
        }

        // Move Right
        const right = solve(i, j + 1, neu);
        if (right !== -Infinity) {
            best = Math.max(best, coins[i][j] + right);
        }

        // Neutralize (skip negative)
        if (coins[i][j] < 0 && neu > 0) {
            const downSkip = solve(i + 1, j, neu - 1);
            const rightSkip = solve(i, j + 1, neu - 1);

            const skipBest = Math.max(downSkip, rightSkip);
            if (skipBest !== -Infinity) {
                best = Math.max(best, skipBest);
            }
        }

        return dp[i][j][neu] = best;
    }

    return solve(0, 0, 2);
};