/**
 * Approach: Two Queue Shuffling.
 * Intuitively, we use one queue to store the elements and another as temporary 
 * space. For a pop operation, we move all but the last element to the second 
 * queue, retrieve the last element, and then swap the roles of the two queues.
 */
var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

MyStack.prototype.pop = function() {
    let n = this.q1.length

    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift())
    }

    let ans = this.q1.shift()

    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return ans
};

MyStack.prototype.top = function() {
    let n = this.q1.length

    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift())
    }

    let ans = this.q1[0]

    this.q2.push(this.q1.shift())

    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return ans
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0
};