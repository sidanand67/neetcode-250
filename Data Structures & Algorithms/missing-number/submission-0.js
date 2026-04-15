class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length; 
        let sum = Math.floor((n*(n+1))/2); 
        let compute = nums.reduce((acc, curr) => acc+curr, 0); 
        console.log('sum: ', sum, ' compute: ', compute); 
        return sum - compute; 
    }
}
