/*
Disjoint Set (Union-Find) 

1) Initialize
   - For each element i:
       parent[i] = i    // each element is its own parent (root of its set)
       rank[i] = 0      // an extra measure of tree height (optional but helpful)

2) Find(x)
   - If parent[x] == x, return x (x is the root).
   - Otherwise do: parent[x] = Find(parent[x]) and return parent[x].
     (This "path compression" flattens the tree making future finds faster.)

3) Union(x, y)
   - rx = Find(x), ry = Find(y).
   - If rx == ry, they are already in the same set -> do nothing.
   - Otherwise attach the smaller tree under the larger:
       - If rank[rx] < rank[ry]: parent[rx] = ry
       - Else if rank[rx] > rank[ry]: parent[ry] = rx
       - Else: parent[ry] = rx; rank[rx]++
     (This is "union by rank" which keeps trees shallow.)

4) How to use
   - Call Union(a, b) to merge the sets containing a and b.
   - Call Find(a) and Find(b) to check if a and b are in the same set (Find(a) == Find(b)).

5) Why this is good
   - With path compression + union by rank, Find and Union are very fast (nearly constant time on average).

Example (intuition):
   - Start: parent = [0,1,2,3]
   - Union(0,1) -> {0,1}
   - Union(2,3) -> {2,3}
   - Union(1,3) -> {0,1,2,3}
*/

// Minimal, efficient Disjoint Set (Union-Find) implementation
class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  // Find with path compression
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  // Union by rank; returns true if merged, false if already in same set
  union(x, y) {
    const rx = this.find(x);
    const ry = this.find(y);
    if (rx === ry) return false;
    if (this.rank[rx] < this.rank[ry]) this.parent[rx] = ry;
    else if (this.rank[rx] > this.rank[ry]) this.parent[ry] = rx;
    else {
      this.parent[ry] = rx;
      this.rank[rx]++;
    }
    return true;
  }

  // Convenience: check whether two elements are in the same set
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

module.exports = DisjointSet;

