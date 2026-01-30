/**
 * Approach: Monotonic Stack (Increasing).
 * Intuitively, a rectangle's height is limited by the shortest bar within its 
 * width. We use a stack to keep bars in increasing order; when a shorter bar 
 * appears, it ends the potential rectangles for all taller bars in the stack.
 */
var largestRectangleArea = function (heights) {
    let stack = []
    let max = 0

    heights.push(0)

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()]
            let width = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)

            max = Math.max(max, h * width)
        }
        stack.push(i)
    }

    return max
};

//Core idea:
//Rectangle ends when a shorter bar appears.