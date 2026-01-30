/**
 * Approach: Modulo/Division Iteration.
 * Intuitively, we extract the last digit using `% 10` and append it to 
 * our reversed result. We divide by 10 in each step until all digits 
 * are processed, while handling the sign and overflow.
 */
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