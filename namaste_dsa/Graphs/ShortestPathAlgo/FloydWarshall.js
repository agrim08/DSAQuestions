/**
 * Floyd-Warshall based solution to "Find the City With the Smallest Number of Neighbors at a Threshold Distance"
 *
 * Approach:
 * - Build distance matrix `dist` initialized to 0 on diagonal and Infinity otherwise
 * - Fill direct edges
 * - Run Floyd-Warshall to compute shortest paths between all pairs (O(n^3) time)
 * - Count reachable cities within threshold for each city and pick the city with smallest count.
 *   If tie, return the city with the greatest index (this implementation uses <= to favor higher index).
 *
 * Complexity: Time O(n^3), Space O(n^2)
 *      n - number of cities
 *      edges - list of edges [u, v, weight]
 *      distanceThreshold - distance threshold
 *      return: the city with the smallest number of neighbors within the threshold distance
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // Initialize distance matrix: 0 on diagonal, Infinity elsewhere
    const dist = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === j) ? 0 : Infinity))

    // Set edge weights (undirected graph)
    for (let [u, v, w] of edges) {
        dist[u][v] = w
        dist[v][u] = w
    }

    // Floyd-Warshall: consider each node k as an intermediate to update shortest paths
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // If path through k is shorter, update distance
                dist[i][j] = Math.min(dist[i][j], (dist[i][k] + dist[k][j]))
            }
        }
    }

    // Find the city with the smallest number of neighbors within distanceThreshold.
    // If multiple cities have same count, choose the one with the greatest index (<= ensures this).
    let minCount = Infinity
    let answer = -1
    for (let i = 0; i < n; i++) {
        let count = 0
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                count++
            }
        }
        if (count <= minCount) {
            minCount = count
            answer = i
        }
    }
    return answer
};