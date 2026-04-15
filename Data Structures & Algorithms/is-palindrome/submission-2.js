class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r= s.length -1; 
        while (l < r){
            let lch= s[l]; 
            let rch = s[r];  
            if (!this.isAlphaNumeric(lch)) {
                l++; continue; 
            }
            if (!this.isAlphaNumeric(rch)) {
                r--; continue; 
            }
            lch = lch.toLowerCase(); 
            rch = rch.toLowerCase(); 

            if (lch !== rch) {
                return false; 
            }
            l++; 
            r--; 
        }
        return true; 
    }

    isAlphaNumeric(ch) {
        return (ch >= 'a' && ch <= 'z' )|| (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'); 
    }
}
