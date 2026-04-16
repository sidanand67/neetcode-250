class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []; 
        let top = -1;  
        for(const operation of operations) {
            switch(operation) {
                case "+": {
                    let [a,b] = [stack[top], stack[top-1]]; 
                    let temp = a+b; 
                    stack.push(temp); 
                    top++; 
                    break; 
                }
                case "D":  {
                    let temp = stack[top] * 2; 
                    stack.push(temp); 
                    top++; 
                    break; 
                }
                case "C": 
                {
                    stack.pop(); 
                    top--; 
                    break; 
                }
                default: {
                    stack.push(Number(operation)); 
                    top++; 
                    break; 
                }
            }
        }
        return stack.reduce((acc, curr) => {
            console.log(acc, " ", curr); 
            console.log(typeof acc, " ", typeof curr); 
            return acc+curr; 
        }, 0); 
    }
}
