class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(this.isPalindrome(s)){
            return true; 
        }
        for(let i= 0; i < s.length; i++) {
            let str = s.slice(0, i) + s.slice(i+1); 
            if (this.isPalindrome(str)) {
                return true; 
            }
        }
        return false; 
    }

    isPalindrome(s) {
        let l = 0, r = s.length-1; 
        while(l <= r) {
            if (s[l] !== s[r]){ 
                return false; 
            }
            l++; 
            r--; 
        }
        return true; 
    }
}
