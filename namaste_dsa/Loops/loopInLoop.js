/**
 * Approach: Nested Loops (O(N^2)).
 * Intuitively, for every iteration of the outer loop, the inner loop 
 * performs a complete cycle. This is commonly used for 2D grids or 
 * comparing every pair of elements.
 */
for(i = 0; i < 5; i++){
    for(j = i; j > 0; j--){
        console.log(i,j)
    }
}