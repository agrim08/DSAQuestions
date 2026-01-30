/**
 * Approach: Pairs / Supplemental Stack.
 * Intuitively, to get the minimum value in O(1) time, we store each value 
 * along with the minimum value encountered up to that point. This way, 
 * when we pop an element, the 'current min' for the next element is already known.
 */
var MinStack = function() {
    this.s = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s.length === 0){
        this.s.push([val, val])
    }else{
        let minVal = Math.min(val, this.s[this.s.length - 1][1])
        this.s.push([val, minVal])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length - 1][1]
};