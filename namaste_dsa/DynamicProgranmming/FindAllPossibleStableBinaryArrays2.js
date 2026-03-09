/*
Intuition:
This problem asks to count binary arrays with a fixed number of zeros and ones such that no more 
than `limit` consecutive identical digits appear. This is a counting problem with constraints, 
solvable using Dynamic Programming by tracking the number of 0s, 1s, and the last digit placed.

Approach:
1. **State Definition**: Let `dp[i][j][k]` be the number of stable arrays with `i` zeros and `j` ones, 
   ending with digit `k` (0 or 1).
2. **Transitions**:
   - To calculate `dp[i][j][0]` (ending in 0): We must have placed a block of 0s at the end. This block
     can have a length from 1 to `limit`. If the block has length `x` (where `1 <= x <= limit`), the 
     prefix must have `i-x` zeros and `j` ones, and must end in 1. So, `dp[i][j][0]` is the sum of 
     `dp[i-x][j][1]` for `x` from 1 to `limit` (provided `i-x >= 0`).
   - Similarly, `dp[i][j][1]` is the sum of `dp[i][j-x][0]` for `x` from 1 to `limit` (provided `j-x >= 0`).
3. **Optimization (Prefix Sums)**:
   - The transitions involve summing a range of previous DP states. This can be optimized using prefix sums.
   - Let `sum0[i][j]` be the sum of `dp[x][j][1]` for `x` from 0 to `i`. Then the sum for `dp[i][j][0]` 
     can be calculated as `sum0[i-1][j] - sum0[i-limit-1][j]` (handling boundary conditions).
   - Similarly, use `sum1[i][j]` for the `dp[i][j][1]` transitions.
4. **Base Case**: `dp[0][0][0] = 1` and `dp[0][0][1] = 1` (representing empty arrays or single-element arrays
   depending on interpretation, but here it initializes the process). The loops start from `i=0, j=0`.
5. **Final Answer**: The total number of stable arrays is `dp[zero][one][0] + dp[zero][one][1]`.

Time Complexity: O(zero * one) - Due to the optimized transitions using prefix sums.
Space Complexity: O(zero * one) - For the DP table and prefix sum arrays.
*/


var numberOfStableArrays = function(zero, one, limit) {
    const M = 1e9+7;
    let dp = new Array(zero + 1).fill(null).map(() =>
        new Array(one + 1).fill(null).map(() => [0, 0])
    );

    dp[0][0][0] = 1;
    dp[0][0][1] = 1;

    for (let z = 0; z <= zero; z++) {
        for (let o = 0; o <= one; o++) {
            if (z === 0 && o === 0) continue;

            if (z < limit) {
                if (z > 0) {
                    dp[z][o][1] = dp[z - 1][o][0];
                    if (z > 1) {
                        dp[z][o][1] += dp[z - 1][o][1];
                    }
                }
            } else if (z === limit) {
                if (z > 0) {
                    dp[z][o][1] = dp[z - 1][o][0];
                    if (limit > 1) {
                        dp[z][o][1] += dp[z - 1][o][1];
                    }
                }
            } else if (z > limit) {
                dp[z][o][1] = dp[z - 1][o][0];
                if (limit > 1) {
                    dp[z][o][1] += dp[z - 1][o][1] - dp[z - 1 - limit][o][0];
                }
            }

            dp[z][o][1] %= M;
            dp[z][o][1] += M;
            dp[z][o][1] %= M;

            if (o < limit) {
                if (o > 0) {
                    dp[z][o][0] = dp[z][o - 1][1];
                    if (o > 1) {
                        dp[z][o][0] += dp[z][o - 1][0];
                    }
                }
            } else if (o === limit) {
                if (o > 0) {
                    dp[z][o][0] = dp[z][o - 1][1];
                    if (limit > 1) {
                        dp[z][o][0] += dp[z][o - 1][0];
                    }
                }
            } else if (o > limit) {
                dp[z][o][0] = dp[z][o - 1][1];
                if (limit > 1) {
                    dp[z][o][0] += dp[z][o - 1][0] - dp[z][o - 1 - limit][1];
                }
            }

            dp[z][o][0] %= M;
            dp[z][o][0] += M;
            dp[z][o][0] %= M;
        }
    }
    return (dp[zero][one][0] + dp[zero][one][1]) % M;
};