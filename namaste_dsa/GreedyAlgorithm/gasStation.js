/**
 * Approach: Greedy (One Pass).
 * Intuitively, if the total gas is less than the total cost, a solution is 
 * impossible. Otherwise, whenever our current tank becomes negative, we know 
 * our starting point must be after the current station, so we reset the search.
 */
var canCompleteCircuit = function(gas, cost) {
    let currGain = 0
    let totalGain = 0
    ans = 0

    for(let i = 0; i < gas.length; i++){
        let gain = gas[i] - cost[i]
        currGain = currGain + gain
        totalGain = totalGain + gain

        if(currGain < 0){
            ans = i + 1
            currGain = 0
        }
    }

    return totalGain < 0 ? -1 : ans
};