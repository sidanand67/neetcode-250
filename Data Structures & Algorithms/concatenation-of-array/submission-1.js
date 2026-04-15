class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = []; 
        let len = nums.length; 
        for (let i = 0; i < 2*len; i++) {
            result.push(nums[i%len]); 
        }
        return result; 
    }
}
