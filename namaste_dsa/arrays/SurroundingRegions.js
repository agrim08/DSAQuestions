/**
 * Approach: Boundary-Started Traversal (DFS).
 * Any 'O' that is connected to the boundary cannot be captured. 
 * We perform DFS starting from every 'O' on the edges to mark all reachable 'O's as "safe" (visited).
 * Finally, any 'O' that was not reached by the DFS is surrounded by 'X's and can safely be flipped.
 * Time Complexity: O(M * N), Space Complexity: O(M * N) for the visited array/recursion stack.
 */
var solve = function (board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O' || visited[r][c]) {
            return;
        }

        visited[r][c] = true;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    // Start DFS from border cells
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][cols - 1] === 'O') dfs(i, cols - 1);
    }

    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[rows - 1][j] === 'O') dfs(rows - 1, j);
    }

    // Flip unvisited 'O' to 'X'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O' && !visited[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
};