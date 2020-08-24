/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(!n) return
  let memo = []
  memo[1] = 1
  memo[2] = 2
  if(n < 3) {
      return memo[n]
  }
  for(let i=3; i<=n; i++) {
      memo[i] = memo[i-1] + memo[i-2]
  }
  return memo[n]
};