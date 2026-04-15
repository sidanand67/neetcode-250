class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}; 
        for(let s of strs){
            let count = new Array(26).fill(0); 
            for (let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;  
            }
            let key = count.join(','); 
            if (!hash.hasOwnProperty(key)){
                hash[key] = [];  
            } 
            hash[key].push(s); 
        }
        return Object.values(hash);
    }
}
