class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let temp = Math.floor(nums.length/2); 
        const hash = new Map(); 
        for(let i = 0; i < nums.length; i++){
            let count = (hash.get(nums[i]) || 0) + 1; 
            if (count > temp){
                return nums[i]; 
            }
            hash.set(nums[i], count); 
        }
    }
}
