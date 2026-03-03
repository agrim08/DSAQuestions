//will pass 177 out of 178 test cases
function jumpGame(nums){
    let end = nums.length- 1
    let dp = new Array(nums.length).fill(-1)

    let dfs = (start) => {
        let ans = false
        if(start === end) return true
        if(dp[start] != -1) return dp[start]

        for(let i = 1; i <= nums[start]; i++){
            ans = ans || dfs(start + i)
            if(ans) break
        }
        dp[start] = ans
        return ans
    }

    return dfs(0)
}

//best is greedy -> in greedy directory