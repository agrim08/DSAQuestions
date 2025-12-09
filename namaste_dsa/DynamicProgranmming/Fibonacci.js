//top-down
let store = {}
var fib = function(n) {
    if(n <= 1) return n

    if(!store[n]){
        store[n] = fib(n - 1) + fib(n - 2)
    }

    return store[n]
};

//bottom-up
var fib = function(n) {
    let dp = [0, 1]
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }   
    return dp[n]
}