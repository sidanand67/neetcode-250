class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0, i = 0, r = nums.length -1 ;
        while(i <= r) {
            if (nums[i] === 1) {
                i++; 
            } else if(nums[i] === 0) {
                [nums[l], nums[i]] = [nums[i], nums[l]]; 
                l++; 
                i++; 
            } else {
                [nums[r], nums[i]] = [nums[i], nums[r]]; 
                r--; 
            }
        }
        return nums; 
    }
}
