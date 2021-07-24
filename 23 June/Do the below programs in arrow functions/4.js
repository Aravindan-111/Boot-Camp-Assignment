let primenumbers = (num) => {
    let count = 0;
    let c = [];
    for (i = 0; i < num.length; i++) {
        count = 0;
        for (j = 2; j < num.length; j++) {
            if (num[i] % j == 0) {
                count = count + 1;
            }
        }
        if (count == 0) {
            c.push(num[i]);
        }
    }
    return c;
}
console.log(primenumbers([2, 3, 5, 76, 56, 71]));