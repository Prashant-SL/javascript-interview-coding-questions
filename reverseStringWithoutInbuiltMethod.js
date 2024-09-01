// Program to find Reverse of a string without using built-in method
function reverserString(str) {
    let i = 0;
    let j = str.length - 1;
    str = str.split("");
    while (i < j && j < str.length) {
        [str[i], str[j]] = [str[j], str[i]];
        i++;
        j--;
    }
    return str.join("");
}
reverserString("prashant");