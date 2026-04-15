class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0; 
        let buy = prices[0]; 
        for(let i = 1; i < prices.length; i++){
            buy = Math.min(prices[i], buy); 
            maxProfit = Math.max(maxProfit, prices[i] - buy); 
        }
        return maxProfit; 
    }
}
