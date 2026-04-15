class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let x = null; 
        for(const num of nums) {
            x = x^num; 
        }
        return x; 
    }
}
