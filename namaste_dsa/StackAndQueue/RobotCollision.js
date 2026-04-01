var survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;
    // Create an array of indices and sort them based on their physical positions
    const indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => positions[a] - positions[b]);

    const stack = []; // Will store indices of robots moving 'R'

    for (let i of indices) {
        if (directions[i] === 'R') {
            stack.push(i);
        } else {
            // Robot is moving 'L', check for collisions with 'R' robots in stack
            while (stack.length > 0 && healths[i] > 0) {
                let topIdx = stack[stack.length - 1];

                if (healths[topIdx] < healths[i]) {
                    // Left robot wins
                    healths[topIdx] = 0;
                    healths[i] -= 1;
                    stack.pop();
                } else if (healths[topIdx] > healths[i]) {
                    // Right robot wins
                    healths[i] = 0;
                    healths[topIdx] -= 1;
                } else {
                    // Both destroyed
                    healths[i] = 0;
                    healths[topIdx] = 0;
                    stack.pop();
                }
            }
        }
    }

    // Return healths of survivors in their original input order
    return healths.filter(h => h > 0);
};