let show = function(a) {
    let count = 0;
    for (i = 0; i < a.length; i++) {
        count = count + a[i];
    }
    console.log(count);
}
show([12, 32, 34]);