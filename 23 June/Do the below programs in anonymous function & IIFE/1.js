let show = function(a) {
    let b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            b.push(a[i]);
        }
    }
    console.log(b);
}
show([12, 32, 45, 67]);