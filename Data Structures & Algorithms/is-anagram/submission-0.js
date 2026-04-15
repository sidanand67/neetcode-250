class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false; 
        }
        const dict = {}; 
        for (let el of s) {
            dict[el] = (dict[el] || 0) + 1; 
        }

        for (let el of t) {
            if (!Object(dict).hasOwnProperty(el)) {
                return false; 
            }
            dict[el]--; 
        }

        return Object.values(dict).filter(el => el > 0).length > 0 ? false : true; 
    }

}
