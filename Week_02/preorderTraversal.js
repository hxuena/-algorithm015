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
var preorderTraversal = function(root) {
  let number = []
  if(!root) return number
  preOrder(root, number)
  return number
};

function preOrder(root, arr) {
   arr.push(root.val)
   if(root.left) {
       preOrder(root.left, arr)
   }
   if(root.right) {
       preOrder(root.right, arr)
   }
}