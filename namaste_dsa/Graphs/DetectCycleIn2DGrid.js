var containsCycle = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const dfs = (r, c, pr, pc) => {
        visited[r][c] = true;

        // Directions: [row offset, col offset]
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            // 1. Boundary check
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
            
            // 2. Value check: Must match the current character
            if (grid[nr][nc] !== grid[r][c]) continue;

            // 3. Parent check: Don't go immediately back to where you just came from
            if (nr === pr && nc === pc) continue;

            // 4. Cycle detection: If we hit a visited node of the same value, it's a cycle
            if (visited[nr][nc] || dfs(nr, nc, r, c)) return true;
        }

        return false;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c] && dfs(r, c, -1, -1)) return true;
        }
    }

    return false;
};