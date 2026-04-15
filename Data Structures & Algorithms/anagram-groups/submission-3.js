class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map(); 
        for(let ch of strs) {
            let char = ch.split('').sort().join(''); 
            if(hash.has(char)) {
                let temp = hash.get(char); 
                temp.push(ch); 
                hash.set(char, temp); 
            }  else {
                hash.set(char, [ch]); 
            }
        }

        return [...hash.values()];
    }
}
