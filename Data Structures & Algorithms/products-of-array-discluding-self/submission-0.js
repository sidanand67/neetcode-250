class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force approach
        const result = []; 
        for(let i = 0; i < nums.length; i++) {
            let temp = 1; 
            for(let j = 0;j < nums.length; j++) {
                if(i === j){
                    continue; 
                }
                temp *= nums[j]; 
            }
            result.push(temp); 
        }
        return result; 
    }
}
