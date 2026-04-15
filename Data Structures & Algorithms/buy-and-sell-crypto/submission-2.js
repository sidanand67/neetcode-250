class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]; 
        let sell = prices[0]; 
        let profit = 0; 
        for(let i = 1; i < prices.length; i++){
            if (prices[i] - buy > profit ){
                sell = prices[i]; 
                profit = sell - buy; 
            } else if (prices[i] < buy){
                buy = prices[i]; 
            }
        }
        return profit; 
    }
}
