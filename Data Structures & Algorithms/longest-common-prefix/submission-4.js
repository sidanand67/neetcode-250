class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // find shortest word 
        let sortedWords = strs.toSorted((a,b) => a.length - b.length); 
        console.log(sortedWords); 
        let word = sortedWords[0], processCondition = true; 
        while(processCondition) {
            let temp = strs.every(str => str.startsWith(word)); 
            if(!temp) {
                word = word.slice(0, word.length-1); 
            } else {
                processCondition = false; 
            }
        }
        return word; 
    }
}
