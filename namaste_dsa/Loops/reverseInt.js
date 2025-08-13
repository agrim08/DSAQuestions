function reverseInt(n){
    let copy = n
    n = Math.abs(n)
    let rev = 0

    while(n > 0){
        let rem = n % 10
        rev = (rev * 10) + rem
        n = Math.floor(n / 10)
    }

    if(rev > 2**31 - 1) return 0

    return copy < 0 ? -rev : rev
}


console.log(reverseInt(123))
console.log(reverseInt(-978))