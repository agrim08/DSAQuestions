/**
 * Approach: Monotonic Stack + Circular Indexing.
 * Intuitively, in a circular array, the next greater element for a number 
 * might be behind it. We simulate this by traversing the array twice (using 
 * `i % n`) to allow elements to look at their predecessors for larger values.
 */
var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums]
    let n = arr.length
    let s = []
    let ans = new Array(n).fill(-1)
    s.push(arr[n - 1])

    for(let i = n - 2; i >= 0; i--){
        while(s.length){
            let top = s[s.length - 1]
            if(arr[i] < top){
                ans[i] = top
                break
            }else{
                s.pop()
            }
        }
        s.push(arr[i])
    }

    return ans.slice(0, nums.length)
};



//optimized:-
//! try to dry run
var nextGreaterElementsOptimized = function(arr) {
    let n = arr.length
    let s = []
    let ans = new Array(n).fill(-1)
    s.push(arr[n - 1])

    for(let i = (2 * n) - 2; i >= 0; i--){
        while(s.length){
            let top = s[s.length - 1]
            if(arr[i % n] < top){
                ans[i % n] = top
                break
            }else{
                s.pop()
            }
        }
        s.push(arr[i % n])
    }

    return ans
};
