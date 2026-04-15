class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
    //    brute force solution 

        let single; 
        for(let i = 0; i < nums.length; i++){
            single = true; 
            for(let j = 0; j < nums.length; j++){
                if (nums[i] === nums[j] && i !== j){
                    single = false; 
                }
            }
            if (single) {
                return nums[i]; 
            }
        }
    }
}
