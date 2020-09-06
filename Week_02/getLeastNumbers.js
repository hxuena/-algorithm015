/**
 * 最小的K个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 使用高级排序（代码用的是快排），时间复杂度是O(NlogN)，空间复杂度是O(logN)。
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a-b)
  return arr.slice(0, k)
};