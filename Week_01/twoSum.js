/**
 * https://leetcode-cn.com/problems/two-sum/
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const sum = {}
  for(let i=0; i<nums.length; i++) {
      let targetNum = target - nums[i]
      let targetIndex = sum[targetNum]
      if(targetIndex !== undefined) {
          return [targetIndex, i]
      }
      sum[nums[i]] = i
  }
};

// 时间复杂度 O(n), 空间复杂度 O(n)