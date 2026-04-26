class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map(); 
        for(let num of nums) {
            let count = (hash.get(num) || 0 ) + 1; 
            hash.set(num, count); 
        }
       const result = Array.from(hash.entries()); 
       result.sort(([k1, v1], [k2, v2]) => v2-v1); 
       return result.slice(0,k).map(([k, v])=> k); 
    }

}
