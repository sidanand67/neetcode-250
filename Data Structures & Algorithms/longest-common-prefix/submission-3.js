class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       let str = strs[0].split(""); 
       for(let j = 0; j < str.length; j++) {
        for(let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== str[j]) {
                return str.slice(0, j).join("");  
            }
        }
       }
       return str.join("");  
    }
}
