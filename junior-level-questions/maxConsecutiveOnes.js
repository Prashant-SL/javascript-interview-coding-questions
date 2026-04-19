// Find the max count of consecutive 1’s in an array
function maxOnes(arr) {
    let maxCount = 0;
    let i = 0;
    let j = i + 1;
    let currentMax = 0;

    while (i < j & j < arr.length) {
        if (arr[i] == 1) {
            currentMax++;
        } else {
            if (currentMax > maxCount) {
                maxCount = currentMax;
            }
            currentMax = 0;
        }
        i++;
        j++;
    };
    console.log("maxCount", maxCount);
}

maxOnes([0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1])