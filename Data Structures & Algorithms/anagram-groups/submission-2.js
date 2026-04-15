class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map(); 
        for(const str of strs) {
            let temp = str.split('').sort().join(); 
            if (!map.has(temp)) {
                map.set(temp, [str]); 
            } else {
                let value = map.get(temp); 
                value.push(str); 
                map.set(temp, value); 
            }
        }
        return [...map.values()]; 
    }
}
