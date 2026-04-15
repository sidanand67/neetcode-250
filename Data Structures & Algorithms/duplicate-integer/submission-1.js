class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // optmized solution 
        const dict = {}; 
        for(let num of nums) {
            if (!dict[num]) {
                dict[num] = (dict[num] || 0) + 1; 
            } else {
                return true; 
            }
        }
        return false; 
    }
}
