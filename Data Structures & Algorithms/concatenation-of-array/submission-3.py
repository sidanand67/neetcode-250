class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        num_length = len(nums)
        result = [0]*num_length*2
        for i in range(len(nums)):  
            result[i] = nums[i]
            result[i+num_length] = nums[i]
        return result
            