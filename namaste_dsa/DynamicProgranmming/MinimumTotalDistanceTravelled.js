var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b)
    factory.sort((a, b) => a[0] - b[0])

    let positions = [];
    for (let [pos, limit] of factory) {
        for (let i = 0; i < limit; i++) {
            positions.push(pos);
        }
    }

    let m = positions.length
    let n = robot.length

    let dp = Array.from({length: n}, () => new Array(m).fill(-1))

    function solve(ri, fi){
        if(ri >= n) return 0
        if(fi >= m) return Infinity

        if(dp[ri][fi] !== -1) return dp[ri][fi]

        let take = Math.abs(robot[ri] - positions[fi]) + solve(ri + 1, fi + 1)
        let skip = solve(ri, fi + 1)

        return dp[ri][fi] = Math.min(take, skip)
    }

    return solve(0, 0)
};