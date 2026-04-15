class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = new Array(); 
        for (const opt of operations) {
            let len = stack.length; 
            switch(opt){
                case "+": {
                    let x = stack[len-1]; 
                    let y = stack[len-2];
                    let z = Number(x+y); 
                    stack.push(z); 
                    break;  
                }
                case "D": {
                    let x = stack[len-1]; 
                    let y = Number(x*2); 
                    stack.push(y); 
                    break; 
                }
                case "C": {
                    stack.pop(); 
                    break; 
                } 
                default: {
                    stack.push(Number(opt)); 
                }
            }
        }
        return stack.reduce((acc, curr) => acc+curr, 0); 
    }
}
