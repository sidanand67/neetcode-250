class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let word = strs[0]; 
        for(let i = 0 ; i< word.length; i++) {
            for(let str of strs){ 
                if (i === str.length || str[i] !== word[i]) {
                    return word.slice(0, i); 
                }
            }
        }
        return word; 
    }
}
