class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // better approach 
        // const hash = {}; 
        // for(let el of nums) {
        //     if (hash[el]) {
        //         return true; 
        //     }
        //     hash[el] = 1; 
        // }
        // return false; 

        // another better approach 
        return new Set(nums).size < nums.length; 
    }
}
