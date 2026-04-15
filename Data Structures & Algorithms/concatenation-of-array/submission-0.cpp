class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> result; 
        int len = nums.size(); 
        for(int i = 0; i < len * 2; i++) {
            result.push_back(nums[i%len]); 
        }
        return result; 
    }
};