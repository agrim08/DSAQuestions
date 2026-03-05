```javascript
/**
 * Problem: Target Sum
 * Given an array of numbers and a target, find how many ways you can place '+' or '-' 
 * before each number to make the total sum equal to the target.
 *
 * Logic:
 * 1. We use recursion (DFS) to try every possible combination.
 * 2. At each step (index), we have two branches:
 *    - Branch 1: Add the current number to the running sum.
 *    - Branch 2: Subtract the current number from the running sum.
 * 3. Base Case: Once we've processed all numbers (index === nums.length):
 *    - If the sum equals the target, we found 1 valid way.
 *    - Otherwise, return 0.
 *
 * Dry Run: nums = [1, 1], target = 0
 * 
 * State Space Tree:
 *                (index: 0, sum: 0)
 *               /                 \
 *         +1  /                     \ -1
 *       (index: 1, sum: 1)        (index: 1, sum: -1)
 *        /           \             /           \
 *    +1 /         -1  \        +1 /         -1  \
 * (2, 2)         (2, 0)       (2, 0)         (2, -2)
 * [Sum!=0]      [Sum==0]     [Sum==0]       [Sum!=0]
 * Returns 0    Returns 1    Returns 1      Returns 0
 *       \        /             \            /
 *      (0 + 1) = 1             (1 + 0) = 1
 *               \             /
 *                (1 + 1) = 2 ways
 */
```


function TargetSum(nums, target){
    function dfs(index, sum){
        if(index === nums.length){
            return sum === target ? 1 : 0
        }

        let add = dfs(index + 1, sum + nums[index])
        let subtract = dfs(index + 1, sum - nums[index])

        return add + subtract
    }

    return dfs(0, 0)
}