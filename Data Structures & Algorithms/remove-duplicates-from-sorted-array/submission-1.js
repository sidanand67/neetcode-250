class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0; 
        for(let right = 0; right < nums.length; right++ ){
            if (nums[left] !== nums[right]) {
                nums[++left] = nums[right]; 
            }
        }
        return left+1; 
    }
}
