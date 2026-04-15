class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length; 
        const result = new Array(2*n).fill(0); 
        for (let i = 0; i < 2*n; i++){
            result[i] = nums[i%n]; 
        }   
        return result; 
    }
}
