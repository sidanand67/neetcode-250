class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = ""; 
        let p1 = 0, p2 = 0; 
        while(p1 < word1.length && p2 < word2.length) {
            ans += word1[p1++]; 
            ans += word2[p2++]; 
        }
        if (p1 === word1.length) {
            ans += word2.slice(p2); 
        }
        else if(p2 === word2.length) {
            ans += word1.slice(p1); 
        }
        return ans; 
    }
}
