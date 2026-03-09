/*
Intuition:
The problem requires building a binary array where no more than 'limit' consecutive 0s or 1s appear.
This can be modeled as alternating between placing a "block" of 0s and a "block" of 1s, where each
block size is between 1 and 'limit'.

Approach:
- Use Top-Down Dynamic Programming (Recursion + Memoization).
- State: dp[zeroLeft][oneLeft][lastWasOne]
  - zeroLeft: Number of zeros remaining to be placed.
  - oneLeft: Number of ones remaining to be placed.
  - lastWasOne: 0 if the last block placed was zeros, 1 if it was ones.
- Base Case:
  - If both zeroLeft and oneLeft are 0, we have successfully formed a valid array, return 1.
- Transitions:
  - If lastWasOne is true (we just placed 1s), we can now place a block of 0s.
    - Iterate i from 1 to limit (or zeroLeft if smaller).
    - Recursively call for (zeroLeft - i, oneLeft, 0).
  - If lastWasOne is false (we just placed 0s), we can now place a block of 1s.
    - Iterate i from 1 to limit (or oneLeft if smaller).
    - Recursively call for (zeroLeft, oneLeft - i, 1).
- Memoization:
  - Store the result in dp[zeroLeft][oneLeft][lastWasOne] to avoid re-computation.
- Final Answer:
  - Sum the results of starting with a block of 0s and starting with a block of 1s.

Time Complexity: O(zero * one * limit) - Each state is computed once, and the transition takes O(limit).
Space Complexity: O(zero * one) - For the memoization table.
*/

var numberOfStableArrays = function(zero, one, limit) {
    let MOD = 1000000007;

    let dp = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => Array(2).fill(-1))
    );

    function solve(zeroLeft, oneLeft, lastWasOne, limit){
        if(zeroLeft === 0 && oneLeft === 0) return 1

        let idx = lastWasOne ? 1 : 0; //js issue

        if (dp[zeroLeft][oneLeft][idx] !== -1)
            return dp[zeroLeft][oneLeft][idx];

        let res = 0

        if(lastWasOne){ //explore 0s
            for(let i = 1; i <= Math.min(limit, zeroLeft); i++){
                res = (res + solve(zeroLeft - i, oneLeft, 0, limit)) % MOD
            }
        }
        else{ //explore 1s
            for(let i = 1; i <= Math.min(limit, oneLeft); i++){
                res = (res + solve(zeroLeft, oneLeft - i, true, limit)) % MOD
            }
        }

        dp[zeroLeft][oneLeft][idx] = res;
        return res
    }

    let startWithZero = solve(zero, one, true, limit)
    let startWithOne = solve(zero, one, false, limit)

    return (startWithZero + startWithOne) % MOD
};