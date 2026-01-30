/**
 * Approach: Index-Based Hashing (Cyclic Sort Idea).
 * Intuitively, for an array of length N, the first missing positive must 
 * be in [1, N+1]. We treat the array itself as a hash table, where 
 * `nums[i]` being negative indicates that the number `i + 1` is present.
 */
// For an array of length n, the first missing positive must be in the range [1, n].
// If all numbers 1 to n are present, the answer is n + 1.

// Algorithm:-
// Ignore invalid numbers
// Replace all numbers <= 0 or > n with n + 1.

// Mark existing numbers
// For each number val in the array:

// If 1 ≤ val ≤ n, mark its presence by making nums[val - 1] negative.

// Find the missing number

// Traverse the array.

// The first index i with a positive value means i + 1 is missing.

// If none missing

// Return n + 1.


/*************************************************************** */
var firstMissingPositiveWithExtraSpace = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (num > 0) {
            set.add(num);
        }
    }

    let i = 1;
    while (true) {
        if (!set.has(i)) {
            return i;
        }
        i++;
    }
};



var firstMissingPositiveWithoutExtraSpace = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        let val = Math.abs(nums[i]);

        if (val >= 1 && val <= n) {
            let idx = val - 1;
            if (nums[idx] > 0) {
                nums[idx] = -nums[idx];
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
};
