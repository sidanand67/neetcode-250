class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arr = new Array(26).fill(0); 
        for(let ch of s) {
            let ind = ch.charCodeAt(0) - 'a'.charCodeAt(0); 
            arr[ind]++; 
        }

        for(let ch of t) {
            let ind = ch.charCodeAt(0) - 'a'.charCodeAt(0); 
            arr[ind]--; 
        }

        for(let i = 0 ;i < 26; i++) {
            if (arr[i] !== 0) {
                return false; 
            }
        }
        return true; 
    }
}
