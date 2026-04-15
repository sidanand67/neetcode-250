class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}; 
        for(let i = 0; i < nums.length; i++){
            let temp = target - nums[i]; 
            if (hash.hasOwnProperty(temp)){
                return [i, hash[temp]]; 
            }    
            hash[nums[i]] = i; 
        }
    }
}
