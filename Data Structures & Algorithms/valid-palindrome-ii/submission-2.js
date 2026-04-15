class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        const isPal = (s, left, right) => {
            while(left < right) {
                if (s[left] !== s[right]) {
                    return false; 
                }
                left++; 
                right--; 
            }
            return true; 
        }

        let left = 0, right = s.length-1; 
        while(left < right) {
            if (s[left] === s[right]) {
                left++; 
                right--; 
            } else {
                // remove a character from either left or right & check if it makes up a palindrome
                return isPal(s, left+1, right) || isPal(s, left, right-1); 
            }
        }
        return true; 
    }
}
