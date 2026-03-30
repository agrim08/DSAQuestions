var checkStrings = function(s1, s2) {
    const even = new Array(26).fill(0);
    const odd = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        const c1 = s1.charCodeAt(i) - 97;
        const c2 = s2.charCodeAt(i) - 97;

        if (i % 2 === 0) {
            even[c1]++;   // from s1
            even[c2]--;   // from s2
        } else {
            odd[c1]++;
            odd[c2]--;
        }
    }

    // check all zero
    for (let i = 0; i < 26; i++) {
        if (even[i] !== 0 || odd[i] !== 0) return false;
    }

    return true;
};