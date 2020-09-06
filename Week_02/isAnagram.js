/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 如果输入字符串包含 unicode 字符怎么办
 */

// 哈希表，两次遍历
//时间复杂度：O(n)  空间复杂度：O(1)O(1)
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let map = new Map()
  s.split('').forEach(i => {
     let current = map.get(i)
     if(current){
         map.set(i, current+1)
     } else {
         map.set(i, 1)
     }
  })

  t.split('').forEach(item => {
      let current = map.get(item)
      if(map.has(item)){
          map.set(item, current-1)
      } else {
          return false
      }
  })

  return [...map.values()].every(item => item === 0)
  
};
