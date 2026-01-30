/**
 * Approach: Greedy (Peak-Valley).
 * Intuitively, since we can buy and sell multiple times, we should capture 
 * every price increase. If today's price is higher than yesterday's, we 
 * 'buy' yesterday and 'sell' today, adding the difference to our total profit.
 */
var maxProfit = function(prices) {
    let profit = 0
    for(let i = 0; i < prices.length; i++){
        if(prices[i + 1] > prices[i]){
            profit += prices[i + 1] - prices[i]
        }
    }

    return profit
};