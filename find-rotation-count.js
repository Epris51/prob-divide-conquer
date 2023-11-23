function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // If the array is already sorted, no rotation has occurred
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        // Check if the middle element is the minimum
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // Decide which side to go
        if (arr[mid] <= arr[end]) {
            end = mid - 1;
        } else if (arr[mid] >= arr[start]) {
            start = mid + 1;
        }
    }

    return 0; // This should never be reached if the input is a rotated sorted array
}

module.exports = findRotationCount;
