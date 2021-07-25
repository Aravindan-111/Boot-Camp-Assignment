function prime() {
    let count = 0;
    let count1 = 0;
    let c = [];
    for (i = 1; count < 100; i++) {
        count1 = 0;
        for (j = 2; j < i - 1; j++) {
            if (i % 2 == 0) {
                count1 = count1 + 1;
            }
        }
        if (count1 == 0) {
            count = count + 1;
            c.push(i);
        }
    }
    console.log(c);
}
console.log(prime())