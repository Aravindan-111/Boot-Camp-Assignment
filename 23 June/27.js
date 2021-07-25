let primenum = (nPrimes, StartAt) => {
    let count = 0;
    let dummy = 0;
    let c = [];
    for (i = StartAt + 1; count < nPrimes; i++) {
        count1 = 0;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                count1 = count1 + 1;
            }
        }
        if (count1 == 0) {
            c.push(i);
            count = count + 1;
        }
    }
    return c;
}
let summa = primenum(10, 100);
console.log(summa);