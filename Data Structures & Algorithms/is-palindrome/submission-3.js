class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1; 
        while(l < r) {
            if (!this.isalnum(s[l])) {
                l++; 
                continue; 
            }
            if (!this.isalnum(s[r])) {
                r--; 
                continue; 
            }
            let a = s[l].toLowerCase(); 
            let b = s[r].toLowerCase(); 
            if (a !== b)  {
                return false; 
            }
            l++; r--; 
        }
        return true; 
    }
    isalnum(ch) {
        return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
    }
}
