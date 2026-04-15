class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0; 
        let buy = prices[0], sell = prices[0]; 
        for(let i = 1; i < prices.length; i++) {
            if (prices[i] - buy > profit){ 
                sell = prices[i]; 
                profit = sell - buy; 
            } else if (prices[i] < buy) {
                buy = prices[i]; 
            }
        }
        return profit; 
    }
}
