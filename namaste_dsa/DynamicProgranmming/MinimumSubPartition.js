/**
 * Approach: Minimum Subset Sum Difference using Dynamic Programming
 * 
 * 1. Calculate the `totalSum` of all elements in the array.
 * 2. We need to divide the array into two subsets such that the absolute difference between their sums is minimized.
 * 3. Let the sum of the first subset be `s1` and the second be `s2`. We know `s1 + s2 = totalSum`, so `s2 = totalSum - s1`.
 *    The difference is `|s1 - s2| = |s1 - (totalSum - s1)| = |2 * s1 - totalSum|`.
 * 4. We use DP to find all possible subset sums `s1` that can be formed from the array.
 *    `dp[i][j]` is true if a subset sum of `j` can be formed using the first `i` elements.
 * 5. After filling the DP table, the last row (`dp[n]`) tells us which sums are possible using all elements.
 * 6. We iterate through all possible sums `s1`, and for each valid sum, we calculate the difference `|totalSum - 2 * s1|`
 *    and keep track of the minimum difference found.
 */
var minimumDifference = function (arr) {
    const n = arr.length;

    const totalSum = arr.reduce((sum, num) => sum + Number(num), 0);

    // dp[i][j] => can we make sum j using first i elements
    const dp = Array.from({ length: n + 1 }, () => Array(totalSum + 1).fill(false));

    // Sum 0 is always possible
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let sum = 1; sum <= totalSum; sum++) {

            let notTake = dp[i - 1][sum];

            let take = false;
            if (arr[i - 1] <= sum) {
                take = dp[i - 1][sum - arr[i - 1]];
            }

            dp[i][sum] = take || notTake;
        }
    }

    let minDiff = Infinity;

    // Check all achievable subset sums
    for (let s1 = 0; s1 <= totalSum; s1++) {
        if (dp[n][s1]) {
            let s2 = totalSum - s1;
            minDiff = Math.min(minDiff, Math.abs(s2 - s1));
        }
    }

    return minDiff;
};