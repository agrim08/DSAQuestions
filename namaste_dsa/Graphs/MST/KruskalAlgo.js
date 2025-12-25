const DisjointSet = require('./DisjointSetAlgorithm.js');

const edges = [
    [0, 1, 4], [0, 2, 4], [1, 2, 2],    
    [2, 3, 3], [2, 5, 2], [2, 4, 4],
    [3, 4, 3], [5, 4, 3]
]

function kruskalMST(n, edges) {
    edges.sort((a, b) => a[2] - b[2]); //0th index - weight
    let mstCost = 0

    let uf = new DisjointSet(n);

    for(let [u, v, w] of edges){
        if(uf.union(u, v)){
            mstCost += w;
        }
        else{
            //cycle detected, do nothing
        }
    }
    return mstCost;
}

console.log(kruskalMST(8, edges));