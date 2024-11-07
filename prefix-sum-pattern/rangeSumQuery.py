# Problem Statement:
# Given an array nums, answer multiple queries about the sum of elements
# within a specific range [i, j].

# Solution:
# Construct the Prefix Sum Array:
# Initialize an array prefix of the same length as nums.
# Set prefix[0] to nums[0].
# For each subsequent index i, set prefix[i] to prefix[i-1] + nums[i].

# Answer Queries Using the Prefix Sum Array:
# For each query (i, j), if i == 0, the sum is prefix[j].
# Otherwise, the sum is prefix[j] - prefix[i-1].

class RangeSum:
    def __init__(self, nums):
        self.nums = nums
        self.prefix = self.build_prefix_sum()

    def build_prefix_sum(self):
        prefix = [0] * len(self.nums)
        prefix[0] = self.nums[0]

        for i in range(1, len(self.nums)):
            prefix[i] = prefix[i - 1] + self.nums[i]
        return prefix


    def range_sum_query(self, queries):
        results = []
        for i, j in queries:
            if i == 0:
                results.append(self.prefix[j])
            else:
                results.append(self.prefix[j] - self.prefix[i - 1])

        return results
