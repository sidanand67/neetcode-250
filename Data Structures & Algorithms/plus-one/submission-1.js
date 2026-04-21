class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carryOver = 1, n = digits.length, r = n-1;  
        let result = [...digits]; 
        while(carryOver && r > -1) {
            let temp = digits[r] + carryOver; 
            result[r] = temp % 10; 
            carryOver = Math.floor(temp/10); 

            r--; 
        }
        if (carryOver) {
            result.unshift(carryOver); 
            carryOver = 0; 
        }
        return result; 
    }
}
