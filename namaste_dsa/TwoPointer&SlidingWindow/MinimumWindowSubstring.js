var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    const map = {};
    for (const char of t) {
        map[char] = (map[char] || 0) + 1;
    }

    let left = 0, right = 0, count = 0;
    let minLen = Infinity, startIdx = 0;

    while (right < s.length) {
        const charR = s[right];
        // If map[charR] > 0, it's a character we actually need from T
        if (map[charR] > 0) count++;
        
        // Decrease frequency (needed chars go toward 0, unneeded become negative)
        map[charR] = (map[charR] || 0) - 1;
        right++;

        // Window is valid when count reaches t.length
        while (count === t.length) {
            if (right - left < minLen) {
                minLen = right - left;
                startIdx = left;
            }

            const charL = s[left];
            // Increase frequency as we shrink the window
            map[charL]++;
            
            // If it becomes > 0, we've removed a necessary character from the window
            if (map[charL] > 0) count--;
            
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(startIdx, startIdx + minLen);
};