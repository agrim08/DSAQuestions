/**
 * Approach: Linear Searching.
 * Intuitively, we check each word in the list one by one. If the word contains 
 * the target character, we add its index to our result list.
 */
var findWordsContaining = function(words, x) {
    let ans = []
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            ans.push(i)
        }
    }

    return ans
};