/**
 * Approach:
 * We use DP with memoization to find the maximum sum of a trionic subarray.
 *
 * State:
 *   solve(i, trend) = maximum sum starting at index i in phase `trend`
 *   trend meanings:
 *     0 → not started yet (can skip elements)
 *     1 → strictly increasing
 *     2 → strictly decreasing
 *     3 → final strictly increasing (valid trionic)
 *
 * Transitions:
 *   - trend 0: skip, or start if nums[i] < nums[i+1]
 *   - trend 1: continue if increasing, or move to trend 2 if decreasing
 *   - trend 2: continue if decreasing, or move to trend 3 if increasing
 *   - trend 3: continue only if increasing
 *
 * Base case:
 *   If i === n, return 0 only if trend === 3, else -∞
 *
 * Memoization:
 *   memo[i][trend] stores previously computed results to ensure O(n) time.
 */


var maxSumTrionic = function (nums) {
    const n = nums.length;
    const NEG_INF = -Infinity;

    // memo[i][trend]
    const memo = Array.from({ length: n }, () => Array(4).fill(undefined));

    let solve = (i, trend) => {
        if (i === n) {
            return trend === 3 ? 0 : NEG_INF
        }

        if (memo[i][trend] !== undefined) {
            return memo[i][trend]
        }

        let take = NEG_INF;
        let skip = NEG_INF;

        if (trend === 0) {
            skip = solve(i + 1, 0)
        }

        if (trend == 3) {
            take = nums[i]
        }


        if (i + 1 < n) {
            let curr = nums[i]
            let next = nums[i + 1]

            if (trend === 0 && next > curr) {
                take = Math.max(take, curr + solve(i + 1, 1))
            }
            else if (trend === 1) {
                if (next > curr) {
                    take = Math.max(take, curr + solve(i + 1, 1));
                } else if (next < curr) {
                    take = Math.max(take, curr + solve(i + 1, 2));
                }
            }
            else if (trend === 2) {
                if (next < curr) {
                    take = Math.max(take, curr + solve(i + 1, 2))
                } else if (next > curr) {
                    take = Math.max(take, curr + solve(i + 1, 3))
                }
            }
            else if(trend === 3 && next > curr){
                take = Math.max(take, curr + solve(i + 1, 3))
            }
        }
        memo[i][trend] = Math.max(take, skip)
        return memo[i][trend]
    }

    return solve(0, 0)
};