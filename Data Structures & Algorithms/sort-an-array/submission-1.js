class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let n = nums.length; 
        let ind; 
        for(let i = 0; i < n-1; i++) {
            ind = i; 
            for(let j = i+1; j < n; j++) {
                if(nums[ind] > nums[j]) {
                    ind = j ;
                }
            }
            if (ind !== i) {
                [nums[ind], nums[i]] = [nums[i], nums[ind]]; 
            }
        }
        return nums; 
    }
}
