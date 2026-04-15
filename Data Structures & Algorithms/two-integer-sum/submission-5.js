class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map(); 
        for(let i = 0; i < nums.length; i++) {
            let temp = target - nums[i]; 
            if (hash.has(temp)) {
                return [hash.get(temp), i]; 
            }
            hash.set(nums[i], i); 
        }
    }
}
