function checkPallindrome(n){
    if(n < 0) return false
    if(n < 10) return true

    let org = n
    let rev = 0

    while(n > 0){
        let rem = n % 10
        rev = (rev * 10) + rem
        n = Math.floor(n / 10)
    }

    if(rev === org) return true
    else return false
}

n = 2
console.log(checkPallindrome(n))