class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length; 
        let sumN = Math.floor((n * (n+1)) / 2);
        let sumArr = nums.reduce((acc, curr) => acc+curr, 0); 
        return sumN - sumArr;  
    }
}
