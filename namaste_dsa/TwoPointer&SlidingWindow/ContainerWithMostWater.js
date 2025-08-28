var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let maxWater = 0

    while(i < j){
        let area = Math.min(height[i], height[j]) * (j - i)
        maxWater = Math.max(maxWater, area)

        if(height[i] > height[j]){
            j--
        }else{
            i++
        }
    }

    return maxWater
};