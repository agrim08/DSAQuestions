/*
(GREEDY + HEIGHT / HISTOGRAM)
You are given a binary matrix (0/1).

You are allowed to:
→ Rearrange columns in EACH ROW independently
Goal:
→ Find the largest rectangle (all 1s) possible

This problem = Histogram problem per row + Greedy sorting

We do 2 main things:
1) Convert matrix → HEIGHT MATRIX
2) For each row → greedily rearrange columns (sort)

STEP 1: BUILD HEIGHT MATRIX

Meaning:
height[i][j] = number of consecutive 1s vertically till row i

WHY?
→ So each row behaves like a histogram

Example:
Input:
[
  [0,1,1],
  [1,1,1],
  [1,1,0]
]

Heights:
[
  [0,1,1],
  [1,2,2],
  [2,3,0]
]


STEP 2: GREEDY IDEA (IMPORTANT)

Key freedom:
→ We can rearrange columns per row

So actual column order DOESN’T matter!

We only care about:
→ heights in that row

So for each row:
→ sort heights in descending order

After sorting:
Largest heights come first

Now we try:
Take first k columns → width = k
Minimum height among them = sorted[k-1]

Area = height * width

We try all k:
→ (sorted[0] * 1)
→ (sorted[1] * 2)
→ (sorted[2] * 3)
...

This guarantees max area because:
→ we always use tallest columns first


STEP 3: AREA CALCULATION

For each row:

Example row:
[2,3,0]

After sorting:
[3,2,0]

Now:
j = 0 → area = 3 * 1 = 3
j = 1 → area = 2 * 2 = 4   ← best
j = 2 → break (height = 0)

Max = 4

1) Build heights
2) For each row:
     - Sort descending
     - Try all widths
     - Compute max area

Height building → O(m * n)
Sorting each row → O(m * n log n)

Total → O(m * n log n)
*/

var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // STEP 1: Build height matrix
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    let maxArea = 0;

    // STEP 2 + 3: Greedy per row
    for (let i = 0; i < m; i++) {
        const sorted = [...matrix[i]].sort((a, b) => b - a);

        for (let j = 0; j < n; j++) {
            if (sorted[j] === 0) break;

            const height = sorted[j];
            const width = j + 1;

            maxArea = Math.max(maxArea, height * width);
        }
    }

    return maxArea;
};