/**
 * Approach: Sliding Window + Hash Map.
 * Intuitively, we maintain a sliding window that contains at most 2 types 
 * of fruits. When a third type arrives, we shrink the window from the 
 * left until only two types remain, tracking the maximum window size.
 */
var totalFruit = function(fruits) {
    let left = 0
    let max = 0
    let map = new Map()

    for(let right = 0; right < fruits.length; right++){
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)

        while(map.size > 2){
            map.set(fruits[left], (map.get(fruits[left]) || 0) - 1)

            if(map.get(fruits[left]) === 0){
                map.delete(fruits[left])
            }

            left++
        }

        max = Math.max(max, right - left + 1)
    }

    return max
};