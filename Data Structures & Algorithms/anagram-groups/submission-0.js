class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}; 
        // sorting strings & checking against hashtable
        for (let s of strs) {
            let temp = s.split("").sort().join(""); 
            if (hash.hasOwnProperty(temp)) {
                hash[temp].push(s); 
            } else {
                hash[temp] = [s]; 
            }
        }

        // returning entries from hashtable
        return Object.values(hash); 
    }
}
