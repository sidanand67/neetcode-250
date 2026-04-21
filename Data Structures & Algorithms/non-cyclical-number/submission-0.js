class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set(); 
        set.add(n); 
       while(n > 0 && n !== 1) {
            n = this.sum(n); 
            if(set.has(n)) {
                return false; 
            }
            set.add(n); 
       }
       return true;  
    }
    sum(n) {
        let temp = 0; 
        while(n) {
            temp += (n%10)**2; 
            n = Math.floor(n/10); 
        }
        return temp; 
    }
}
