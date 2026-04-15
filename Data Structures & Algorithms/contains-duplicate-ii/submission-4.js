class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const hash = new Map(); 
        for(let i = 0; i < nums.length; i++) {
            if (hash.has(nums[i])) {
                let x = hash.get(nums[i]); 
                if (i - x <= k) {
                    return true; 
                } 
            } 
            hash.set(nums[i], i); 
        }
        return false; 
    }
}
