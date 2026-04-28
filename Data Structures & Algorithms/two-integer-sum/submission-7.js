class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const hash = new Map(); 
        for(let i = 0 ;i < nums.length; i++) {
            let ele = target - nums[i]; 
            if (hash.has(ele)) {
                return [hash.get(ele), i]; 
            }
            hash.set(nums[i], i); 
        }
    }
}
