class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let len = nums.length; 
        let xor = len; 
        for(let i = 0; i < len; i++) {
            xor ^= i ^ nums[i]; 
        }
        return xor; 
    }
}
