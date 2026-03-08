function reverseOddLevels(root){
    function dfs(left, right, level){
        if(!left || !right) return

        if(level % 2 === 1){
            let temp = left.val
            left.val = right.val
            right.val = temp
        }
        dfs(left.left, right.right, level + 1)
        dfs(left.right, right.left, level + 1)
    }
    dfs(root.left, root.right, 1)
    return root
}



//iteration
function reverseOddLevelsIter(root){
    let s = [[root.left, root.right, 1]]

    while(s.length){
        let [left, right, level] = s.pop()

        if(!left || !right) continue

        if(level % 2 === 1){
            let temp = left.val
            left.val = right.val
            right.val = temp
        }

        s.push([left.left, right.right, level + 1])
        s.push([left.right, right.left, level + 1])
    }
    return root
}
