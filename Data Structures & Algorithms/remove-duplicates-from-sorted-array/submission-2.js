class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0, r = 0; 
        while(r < nums.length) {
            if (nums[l] !== nums[r]){ 
                nums[++l] = nums[r]; 
            }
            r++; 
        }
        return l+1; 
    }
}
