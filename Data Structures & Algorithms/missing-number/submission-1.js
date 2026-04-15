class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let len = nums.length; 
        let sumOfLen = Math.floor((len * (len+1))/2);
        let sumOfEle = nums.reduce((acc,curr) => acc+curr, 0); 
        return sumOfLen - sumOfEle; 
        
    }
}
