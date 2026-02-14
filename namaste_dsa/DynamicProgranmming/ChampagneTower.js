var champagneTower = function(poured, rows, glass) {
    const dp = Array.from({ length: rows + 2 }, () =>
        Array(rows + 2).fill(0)
    );

    dp[0][0] = poured

    for(let i = 0; i <= rows; i++){
        for(let j = 0; j <= i; j++){
            if (dp[i][j] > 1) {
                const extra = (dp[i][j] - 1) / 2;
                dp[i + 1][j] += extra;
                dp[i + 1][j + 1] += extra;
                dp[i][j] = 1; // cap current glass
            }
        }
    }

    return Math.min(1, dp[rows][glass])
};