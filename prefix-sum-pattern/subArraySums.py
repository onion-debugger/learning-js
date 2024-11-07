# Problem Statement:
# Given an array of integers nums and an integer k.
# find the total number of continuous subarrays whose sum
# equals to a given number k.

from sys import prefix


def subarray_sum(nums, k):
    prefix = 0
    count = 0
    prefix_sum_count = {0: 1}

    for num in nums:
        prefix += num
        if prefix - k in prefix_sum_count:
            count += prefix_sum_count[prefix - k]
        if prefix in prefix_sum_count:
            prefix_sum_count[prefix] += 1
        else:
            prefix_sum_count[prefix] = 1

    return count

# Given an integer array nums and an integer k, determine if the array
# has a continuous subarray of size at least two whose elements sum up
# to a multiple of k.
#
# Solution:
# Initialize Variables:
#     `prefix` to keep track of the cumulative sum.
#     `prefix_map` dictionary to store the first occurrence of prefix sums
#     with their remainders when divided by k.
# Iterate Through the Array:
#     For each element, update the prefix.
#     Calculate prefix % k.
#     If this remainder has been seen before and the current subarray
#     length is at least two, return True.
#     Otherwise, store the index of this remainder in prefix_map.

def check_subarray_sum(nums, k):
    prefix = 0
    prefix_map = {0: -1}

    for i, num in enumerate(nums):
        prefix += num
        if k != 0:
            prefix %= k
        if prefix in prefix_map:
            if i - prefix_map[prefix] > 1:
                return True

            else:
                prefix_map[prefix] = i
    return False
