function getOpposite(num) {
    if ((Number.isInteger(num) && num > 0) || (num < 0 && Number.isInteger(num))) {
        return -num;
    } else if (num == 0) {
        return 0;
    } else {
        return -1;
    }
}
let a = getOpposite(-3);
console.log(a);