class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0, current = 0; 
        while(current < nums.length) {
            if (nums[current] !== val) {
                nums[start++]= nums[current]; 
            }
            current++; 
        }
        return start; 
    }
}
