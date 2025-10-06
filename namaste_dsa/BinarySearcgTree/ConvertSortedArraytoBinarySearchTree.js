var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    function buildBST(left, right) {
        // Base case: If the left index exceeds the right index, the subarray is empty.
        if (left > right) {
            return null;
        }

        // 1. Find the middle index (midpoint)
        // Using Math.floor for a slightly left-biased middle element is a common choice.
        const mid = Math.floor((left + right) / 2);

        // 2. Create the root node with the middle element's value
        const root = new TreeNode(nums[mid]);

        // 3. Recursively build the left subtree from the left half
        root.left = buildBST(left, mid - 1);

        // 4. Recursively build the right subtree from the right half
        root.right = buildBST(mid + 1, right);

        // 5. Return the newly created root
        return root;
    }

    // Start the recursive process using the full array bounds
    return buildBST(0, nums.length - 1);
};