function areBothOdd(a, b) {
    if (a % 2 != 0 && b % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
let a = areBothOdd(3, 6);
console.log(a);