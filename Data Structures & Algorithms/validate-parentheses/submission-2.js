class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openingBrackets = ["(", "[", "{"];
        let stack = []; 
        let top = -1;   
        for(let ch of s) {
            if (openingBrackets.includes(ch)) {
                stack.push(ch); 
                top++; 
            } else {
                switch(ch) {
                    case ")": {
                        if(stack[top] === "(") {
                            stack.pop(); 
                            top--; 
                        } else {return false; }
                        break; 
                    }
                    case "]": {
                        if(stack[top] === "[") {
                            stack.pop(); 
                            top--; 
                        } else {return false;} 
                        break; 
                    }
                    case "}": {
                        if(stack[top] === "{") {
                            stack.pop(); 
                            top--; 
                        }
                        else return false; 
                        break; 
                    }

                }
            }
        }
        return top === -1;  
    }
}
