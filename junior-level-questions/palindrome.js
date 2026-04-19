// check whether a string is palindrome or not
function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    let result = true;
    while (i < j && j < str.length) {
        if (str[i] == str[j]) {
            i++;
            j--;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

palindrome("gadag")