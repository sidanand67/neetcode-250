class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map(); 
        for(let i = 0; i < nums.length; i++) {
            let temp = nums[i]; 
            if (map.has(temp)&& i - map.get(temp) <= k ) {
                return true; 
            }
            map.set(nums[i], i); 
        }
        return false; 
    }
}
