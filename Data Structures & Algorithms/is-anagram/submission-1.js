class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false; 
        }
        const hash1 = {}; 
        const hash2 = {}; 
        for(let el of s){
            hash1[el] = (hash1[el] || 0) + 1; 
        } 
        for (let el of t){
            hash2[el] = (hash2[el] || 0) + 1; 
        }
        for(let el of s) {
            if (hash1[el] !== hash2[el]) {
                return false; 
            }
        }
        return true; 
    }
}
