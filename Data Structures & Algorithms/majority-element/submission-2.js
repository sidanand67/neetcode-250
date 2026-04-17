class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const sortedNums = nums.toSorted(); 
        const midInd = Math.floor(nums.length / 2); 
        return sortedNums[midInd]; 
    }
}
