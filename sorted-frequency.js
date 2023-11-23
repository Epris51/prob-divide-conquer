function sortedFrequency(arr, num) {
    // Helper functions to find the first and last occurrence of num
    const findFirst = (arr, num) => {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                high = mid - 1;
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    };

    const findLast = (arr, num) => {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                low = mid + 1;
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    };

    // Find the first and last occurrences of num
    const first = findFirst(arr, num);
    const last = findLast(arr, num);

    // If num is not found in the array, return -1
    if (first === -1) return -1;

    // Return the frequency of num
    return last - first + 1;
}

module.exports = sortedFrequency;
