// Basic Version
function sum(a) {
    return function (b) {
        if (!b) {
            return a;
        }

        return sum (a + b);
    }
}

console.log(sum(2)(3)(4)());
