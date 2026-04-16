class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let ind = -1, n = nums.length; 
        for(let i = 0; i < n-1; i++) {
            ind = i; 
            for(let j = i+1; j < n; j++) {
                if(nums[ind] > nums[j]) {
                    ind = j; 
                }
            }
            if(ind !== i) {
                [nums[ind], nums[i]] = [nums[i], nums[ind]]; 
            }
        }
    }
}
