var constructDistancedSequence = function (n) {
    const result = new Array(2 * n - 1).fill(-1);
    const used = new Array(n + 1).fill(false);

    function solve(i) {
        if (i >= result.length) {
            return true; // solution found
        }
        if (result[i] !== -1) {
            return solve(i + 1);
        }

        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;
            // try
            used[num] = true;
            result[i] = num;

            if (num === 1) {
                if (solve(i + 1)) return true;
            } else {
                const j = i + num;

                if (j < result.length && result[j] === -1) {
                    result[j] = num;
                    if (solve(i + 1)) return true;
                    result[j] = -1; // undo
                }
            }
            // undo
            used[num] = false;
            result[i] = -1;
        }
        return false;
    }
    solve(0);
    return result;
};