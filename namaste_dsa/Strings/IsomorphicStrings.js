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