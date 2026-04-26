class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map(); 

        for(let num of nums) {
            let temp = (hash.get(num) || 0) + 1; 
            hash.set(num, temp); 
        }

        const frequency = Array.from({length: nums.length + 1} , () => []); 
        for(const [key, value] of hash.entries()) {
            frequency[value].push(key); 
        }

        const result = []; 
        for(let i = frequency.length-1; i > 0; i--) {
            for(let val of frequency[i]) {
                result.push(val); 
                if(result.length === k) {
                    return result; 
                }
            }
        }
    }
}
