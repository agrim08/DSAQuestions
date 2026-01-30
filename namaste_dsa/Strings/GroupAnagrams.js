/**
 * Approach: Categorization by Sorted Key.
 * Intuitively, anagrams contain the exact same characters. If we sort the 
 * characters of each string, all anagrams of a group will result in the same 
 * 'key'. We use a hash map to group the original strings by their sorted keys.
 */
//approach 1

var groupAnagrams = function(strs) {
    let map = {}

    for(let i = 0; i < strs.length; i++){
        let sorted = strs[i].split("").sort().join("")
        if(!map[sorted]){
            map[sorted] = [strs[i]]
        }else{
            map[sorted].push(strs[i])
        }
    }

    return [...Object.values(map)]
};