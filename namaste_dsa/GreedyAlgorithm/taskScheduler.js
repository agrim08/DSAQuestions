var leastInterval = function(arr, n) {
    const freq = {}
    let maxFreq = 0

    for (let task of arr) {
        freq[task] = (freq[task] || 0) + 1
        maxFreq = Math.max(maxFreq, freq[task])
    }

    let countOfMaxFreqTasks = 0
    for (let key in freq) {
        if (freq[key] === maxFreq) countOfMaxFreqTasks++
    }

    let intervals = (n + 1) * (maxFreq - 1) + countOfMaxFreqTasks
    return Math.max(arr.length, intervals)
};