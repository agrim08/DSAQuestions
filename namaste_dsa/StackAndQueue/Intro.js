//stack

let stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack);

stack.pop()
stack.pop()

console.log(stack);

stack.push(7)
stack.push(10)

console.log(stack[stack.length - 1]);

//queue
let q = []

q.push(1)   //enqueue
q.push(2)
q.push(3)
q.push(4)

q.shift()   //dequeue (remove the first element)
q.shift()

console.log(q);