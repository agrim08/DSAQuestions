var serialize = function(root) {
    let res = []

    let dfs = (curr) => {
        if(!curr){
            res.push("N")
            return
        }

        res.push(curr.val)
        dfs(curr.left)
        dfs(curr.right)
    }
    dfs(root)
    return res.join(",")
};


//deserialize
var deserialize = function(data) {
    let nodes = data.split(",")
    let i = 0

    let dfs = () => {
        if(nodes[i] === "N"){
            i++
            return null
        }

        const node = new TreeNode(parseInt(nodes[i]))
        i++

        node.left = dfs()
        node.right = dfs()

        return node
    }

    return dfs()
};

//or smartly
var serialize = function(root) {
    return JSON.stringify(root)
};


//deserialize
var deserialize = function(data) {
    return JSON.parse(data)
};


/**
 *  In LeetCode’s JavaScript environment, a TreeNode is just a plain object with properties val, left, and right.

    JSON.stringify() recursively converts this entire object tree (including nested children) into a string representation.

    JSON.parse() reconstructs the same nested object structure, which LeetCode accepts as a valid binary tree 
    because it only checks the val, left, and right fields.
 * 

    function TreeNode(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }

          1
        /   \
       2     3


       {
            val:1,
            left:{
                val:2,
                left:null,
                right:null
            },
            right:{
                val:3,
                left:null,
                right:null
            }
        }
  
 */