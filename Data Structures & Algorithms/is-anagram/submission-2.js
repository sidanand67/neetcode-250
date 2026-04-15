class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = this.traverse(s); 
        const map2 = this.traverse(t); 
        if (map1.size !== map2.size) {
            return false; 
        }
        for(const key of map1.keys()) {
            if (map1.get(key) !== map2.get(key)) {
                return false; 
            }
        }
        return true; 
    }

    traverse(str) {
        const map = new Map(); 
        for (let ch of str) {
            let val =  (map.get(ch) || 0)+ 1; 
            map.set(ch, val); 
        }
        return map; 
    }
}
