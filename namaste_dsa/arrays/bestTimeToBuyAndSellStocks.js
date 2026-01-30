/**
 * Approach: One-Pass Greedy (Min-Tracking).
 * Intuitively, to maximize profit, you want to buy at the lowest point seen 
 * so far and sell at the current price. We update the 'minimum price seen' 
 * and 'maximum profit possible' as we traverse the array once.
 */
function MaxProfit(prices){
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }

    return maxProfit
}