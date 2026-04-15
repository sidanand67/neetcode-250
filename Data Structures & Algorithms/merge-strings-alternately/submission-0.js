class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result= ""; 
        let w1 = 0, w2 =0; 
        for(; w1 < word1.length && w2 < word2.length; w1++, w2++) {
            result += word1[w1]; 
            result += word2[w2]; 
        }
        if (w1 < word1.length) {
            result += word1.slice(w1); 
        } else if (w2 < word2.length) {
            result += word2.slice(w2); 
        }
        return result; 
    }
}
