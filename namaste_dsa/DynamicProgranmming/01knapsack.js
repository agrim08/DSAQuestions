let dp = new Array(n + 1).fill(new Array(W + 1).fill(-1))

function knapsack(weight, value, W, n) {
    if (n === 0 || W === 0) return 0

    if (dp[n][W] !== -1) return dp[n][W]

    if (weight[n - 1] <= W) {
        return dp[n][W] = Math.max(knapsack(weight, value, W - weight[n - 1], n - 1) + value[n - 1],
            knapsack(weight, value, W, n - 1)
        )
    }
    else if (weight[n - 1] > W) {
        return dp[n][W] = knapsack(weight, value, W, n - 1)
    }
}

let weight = [1, 3, 4, 5]
let value = [1, 4, 5, 7]
let W = 7
let n = weight.length

console.log(knapsack(weight, value, W, n))