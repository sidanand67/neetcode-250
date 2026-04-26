class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map(); 
        const result = []; 
        for(let num of nums) {
            let count = (hash.get(num) || 0 ) + 1; 
            hash.set(num, count); 
        }
        while(k--) {
            let maxCount = -1; 
            let ans; 
            for(let [key, value] of hash.entries()) {
                if (value > maxCount ){ 
                    maxCount = value; 
                    ans = key; 
                }
            }
            result.push(ans); 
            hash.set(ans, 0); 
        }
        return result; 
    }

}
