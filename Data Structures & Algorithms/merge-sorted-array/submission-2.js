class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
       let pos = m+n-1, l = m-1, r = n-1; 
       while(l > -1 && r > -1) {
            if(nums1[l] > nums2[r]) {
                nums1[pos] = nums1[l]; 
                l--; 
            } else {
                nums1[pos] = nums2[r]; 
                r--; 
            }
            pos--; 
       }
       while (r > -1) {
        nums1[pos] = nums2[r]; 
        pos--; 
        r--; 
       }
    }
    
}
