class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let temp = strs.reduce((acc, curr) => {
            if (acc.length > curr.length){
                acc = curr; 
            }
            return acc; 
        }, strs[0]); 

        while(temp !== ""){
            let result = strs.every(str => str.startsWith(temp)); 
            if (result) {
                return temp; 
            } else {
                temp = temp.slice(0, temp.length-1); 
            }
        }
        return ""; 
    }
}
