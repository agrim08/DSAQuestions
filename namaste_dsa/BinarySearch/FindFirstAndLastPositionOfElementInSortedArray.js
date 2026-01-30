/**
 * Approach: Binary Search.
 * Intuitively, we use two separate binary searches. The first search finds the leftmost
 * boundary (first occurrence) by shifting right towards the target. The second search
 * finds the rightmost boundary (last occurrence) by shifting left towards the target.
 */
var searchRange = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let ans = [-1, -1]

  while(l < r){
    let m = l + Math.floor((r - l) / 2)
    if(nums[m] < target) l = m + 1
    else r = m
  }
  if(nums[l] === target) ans[0] = l

  l = 0
  r = nums.length - 1
  while(l < r){
    let m = l + Math.ceil((r - l) / 2)
    if(nums[m] > target) r = m - 1
    else l = m
  }
  if(nums[r] === target) ans[1] = r

  return ans
};