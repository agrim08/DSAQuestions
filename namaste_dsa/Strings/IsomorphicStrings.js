/**
 * Approach: Two-Way Character Mapping.
 * Intuitively, two strings are isomorphic if there is a consistent character 
 * replacement rule. We maintain two maps: one for `s -> t` and another for 
 * `t -> s` to ensure that each character from one string maps uniquely to 
 * exactly one character in the other.
 */
var isIsomorphic = function(s, t) {
  let StoT = {}
  let TtoS = {}

  for(let i = 0; i < s.length; i++){
    if(!StoT[s[i]] && !TtoS[t[i]]){
        StoT[s[i]] = t[i]
        TtoS[t[i]] = s[i]
    }
    else if(StoT[s[i]] !== t[i]){
        return false
    }
    else if(TtoS[t[i]] !== s[i]){
        return false
    }
  }

  return true
};