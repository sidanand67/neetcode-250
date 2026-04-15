class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // worst approach 
        for (let i = 0; i < nums.length-1; i++ ){
            for(let j = i+1; j < nums.length; j++) {
                let val = nums[i] + nums[j] ; 
                if (val === target){
                    return [i,j]; 
                }
            }
        }
    }
}
