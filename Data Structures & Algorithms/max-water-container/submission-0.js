class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0; 
        let left = 0, right = heights.length - 1; 
        while(left < right) {
            let height = Math.min(heights[left], heights[right]); 
            let width = right - left; 
            let area = height * width; 
            if (heights[left] < heights[right]) {
               left++; 
            } else {
                right--;  
            }
            maxArea = Math.max(area, maxArea); 
        }
        return maxArea; 
    }
}
