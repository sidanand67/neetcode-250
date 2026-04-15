class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return this.selectionSort(nums); 
    }

    selectionSort(nums) {
        for(let i = 0; i < nums.length - 1; i++) {
            let ind = i; 
            for(let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[ind]) {
                    ind = j; 
                }
            }
            if (ind !== i) {
                [nums[ind], nums[i]] = [nums[i], nums[ind]]; 
            }
        }
        return nums; 
    }
}
