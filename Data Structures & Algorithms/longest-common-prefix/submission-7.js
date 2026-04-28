class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let target = strs[0]; 
        for(let i = 0; i < target.length ;i++ ){
            for(let j = 0; j < strs.length; j++) {
                if (i === strs[j].length || strs[j][i] !== target[i]) {
                    return target.slice(0, i); 
                }
            }
        }
        return target; 
    }
}
