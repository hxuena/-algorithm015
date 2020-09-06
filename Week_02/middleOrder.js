/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 * 时间复杂度：O(n)
 * 空间复杂度：最坏情况下需要空间O(n)，平均情况为O(logn)。
 */

var inorderTraversal = function (root) {
  let number = []
  if (!root) return number
  middleOrder(root, number)
  return number
};

function middleOrder(root, arr) {
  if (root.left) {
    middleOrder(root.left, arr)
  }
  arr.push(root.val)
  if (root.right) {
    middleOrder(root.right, arr)
  }
  return arr
}