class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let l = 0, h = numbers.length-1; 
        while(l < h) {
            let temp = numbers[l] + numbers[h]; 
            if(temp === target) {
                return [l+1, h+1]; 
            } else if(temp > target) {
                h--; 
            } else {
                l++; 
            }
        }
    }
}
