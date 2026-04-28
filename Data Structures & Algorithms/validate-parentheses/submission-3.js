class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketMap = {
            ")": "(", 
            "]": "[", 
            "}": "{"
        }; 

        const stack = []; 

        for(let ch of s ) {
            if (bracketMap[ch]) {
                const topElement = stack.length === 0 ? "#" : stack.pop(); 

                if(topElement !== bracketMap[ch]) {
                    return false; 
                }
            } else {
                stack.push(ch); 
            }
        }
        return stack.length === 0; 
    }
}
