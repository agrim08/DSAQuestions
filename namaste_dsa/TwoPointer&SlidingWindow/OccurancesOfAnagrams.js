/**
 * we start mby creating frequency map of pattern string and maintain a variable count === unique char in pat.
 * we start SW from 0, and check if txt[j] is in map, then dec. its freq. and if at some point map[[txt[j]] === 0, count--
 * once we reach, j - i + 1 == k, && count is 0, then we found one anagram.
 * now slide the window further, but as we slide, we also need to restore the calculations
 * so, we inc. map[txt[i]]++ and restore count.
 */

class Solution {
    search(pat, txt) {
        // code here
        let map = {}
        let k = pat.length
        for (let char of pat) {
            map[char] = (map[char] || 0) + 1
        }

        let count = Object.keys(map).length

        let i = 0;
        let ans = 0

        for (let j = 0; j < txt.length; j++) {
            if (txt[j] in map) {
                map[txt[j]]--
                if (map[txt[j]] === 0) {
                    count--
                }
            }

            //check if window === k
            if (j - i + 1 === k) {
                if (count === 0) {
                    ans++
                }

                if (txt[i] in map) {
                    if (map[txt[i]] === 0) {
                        count++
                    }
                    map[txt[i]]++
                }
                ++i
            }
        }
        return ans
    }
}