let show = function(a) {
    let b = [];
    let count;
    for (i = 0; i < a.length; i++) {
        count = 0;
        for (j = 2; j < a[i]; j++) {
            if (a[i] % j == 0) {
                count = count + 1;
            }
        }
        if (count == 0) {
            b.push(a[i]);
        }
    }
    console.log(b);
}
show([12, 32, 34, 3, 21, 19, 22, 34]);