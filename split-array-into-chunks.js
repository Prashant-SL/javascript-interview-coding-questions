function splitArray(arr = [1, 2, 3, 4, 5], size = 2) {
    let result = [];
    let temp = [];
    for (let i=0; i<arr.length;i++) {
        while (temp.length == size) {
            result.push(temp);
            temp=[];
        }
        temp.push(arr[i]);
    }

    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}
splitArray();