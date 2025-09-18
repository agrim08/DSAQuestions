var findTheDifference = function(s, t) {
    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!map.has(char)) {
            return char;
        } else {
            map.set(char, map.get(char) - 1);
            if (map.get(char) < 0) {
                return char; 
            }
        }
    }
};