/**
 * Approach: Greedy Simulation.
 * Intuitively, we always prioritize giving larger bills (like $10) as change first
 * to save smaller $5 bills, which are more versatile for future customers.
 * If we run out of $5 bills, we can no longer serve customers.
 */
var lemonadeChange = function(bills) {
    let wallet = [0, 0]

    for(let i = 0; i < bills.length; i++){
        if(bills[i] == 5){
            ++wallet[0]
        }
        else if(bills[i] == 10){
            ++wallet[1]
            --wallet[0]
        }
        else{
            if(wallet[1]){
                --wallet[1]
                --wallet[0]
            }else{
                wallet[0] -= 3
            }
        }

        if(wallet[0] < 0){
            return false
        }
    }

    return true
};