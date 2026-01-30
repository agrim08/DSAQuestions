/**
 * Approach: Dynamic Programming (Memoization).
 * Intuitively, the minimum coins to make an amount is 1 plus the minimum coins
 * needed for (amount - coin) for all available coins. We explore all paths
 * and cache results to avoid recalculating the same amounts multiple times.
 */
//brute force - TLE
var coinChange = function(coins, amount) {
    let n = coins.length
    let calcMinCoin = (remAmount) => {
        if(remAmount === 0) return 0
        if(remAmount < 0) return -1

        let minCoin = Infinity

        for(let i = 0; i < n; i++){
            let res = calcMinCoin(remAmount - coins[i])
            if(res != -1){
                minCoin = Math.min(minCoin, 1 + res)
            }
        }
        return minCoin === Infinity ? -1 : minCoin
    }
    return calcMinCoin(amount)
};

//optimized with DP

//*using Objects as store for memoization
var coinChange = function(coins, amount) {
    let n = coins.length
    let store = {}

    let calcMinCoin = (remAmount) => {
        if(remAmount === 0) return 0
        if(remAmount < 0) return -1

        if(remAmount in store){
            return store[remAmount]
        }
        let minCoin = Infinity
        for(let i = 0; i < n; i++){
            let res = calcMinCoin(remAmount - coins[i])
            if(res != -1){
                minCoin = Math.min(minCoin, 1 + res)
            }
        }
        store[remAmount] = minCoin === Infinity ? -1 : minCoin
        return store[remAmount]
    }
    return calcMinCoin(amount)
};


//*using Array as store for memoization (faster than object)
var coinChange = function(coins, amount) {
    let store = new Array(amount + 1).fill(undefined);
    function calc(rem) {
        if (rem === 0) return 0;
        if (rem < 0) return -1;
        if (store[rem] !== undefined) return store[rem];

        let minCoin = Infinity;
        
        for (let c of coins) {
            let res = calc(rem - c);
            if (res !== -1) minCoin = Math.min(minCoin, 1 + res);
        }
        store[rem] = minCoin === Infinity ? -1 : minCoin;
        return store[rem];
    }
    return calc(amount);
};
