var pushDominoes = function (dominoes) {
    let n = dominoes.length
    let rightClosestL = new Array(n)
    let leftClosestR = new Array(n)

    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] == 'L')
            rightClosestL[i] = i; //L starts from me
        else if (dominoes[i] == '.')
            rightClosestL[i] = i < n - 1 ? rightClosestL[i + 1] : -1;
        else
            rightClosestL[i] = -1;
    }

    for (let i = 0; i < n; i++) {
        if (dominoes[i] == 'R')
            leftClosestR[i] = i; //R starts from me
        else if (dominoes[i] == '.')
            leftClosestR[i] = i > 0 ? leftClosestR[i - 1] : -1;
        else
            leftClosestR[i] = -1;
    }

    let result = []

    for (let i = 0; i < n; i++) {
        let distRightL = Math.abs(i - rightClosestL[i]); //distance from 'R' towards my left direction
        let distLeftR = Math.abs(i - leftClosestR[i]);  //distance from 'L' towards my right direction

        if (rightClosestL[i] == leftClosestR[i])
            result.push('.');
        else if (rightClosestL[i] == -1)  //No force from right direction towards left, so move R
            result.push('R');
        else if (leftClosestR[i] == -1)   //No force from left direction towards right, so move L
            result.push('L');
        else if (distLeftR == distRightL) //Equal force from left and right
            result.push('.');
        else {
            let res = distRightL < distLeftR ? 'L' : 'R';
            result.push(res)
        }//which ever force is greater (either from left by 'R' or from right by 'L')
    }

    return result.join('');
};