class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l = 0, r = 0, count = m; 
        while(l < m + n && r < n) {
            if(l >= count){ 
                nums1[l] = nums2[r]; 
                r++; 
                l++; 
                count++; 
            } else if(nums1[l] > nums2[r]){
                nums1 = this.moveByOne(nums1, l); 
                nums1[l] = nums2[r]; 
                l++; r++; 
                count++; 
            } else {
                l++; 
            }
        }
    }
    moveByOne(nums, start) {
        for(let i = nums.length-1; i > start; i--) {
            nums[i] = nums[i-1]; 
        }
        return nums; 
    }
}
