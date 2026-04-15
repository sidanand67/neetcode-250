class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int buyingPrice = prices[0];
        for (int price : prices) {
            if (price < buyingPrice) buyingPrice = price;
            int profit = price - buyingPrice;
            if (profit > maxProfit) maxProfit = profit;
        }

        return maxProfit;
    }
}
