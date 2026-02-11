var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const dist = Array.from({ length: rows }, () =>
        Array(cols).fill(0)
    );

    const queue = [];

    // Step 1: Push all 0s into queue (multi-source BFS)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                visited[i][j] = true;
                dist[i][j] = 0;
            }
        }
    }

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    // Step 2: BFS
    while (queue.length > 0) {
        const [r, c] = queue.shift();

        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < rows &&
                nc < cols &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return dist;
};