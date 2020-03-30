class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        n = len(nums)
        for x in range(n):
            for y in range(x+1,n):
                if nums[x] + nums[y] == target:
                    return [x,y]